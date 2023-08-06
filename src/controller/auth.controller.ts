import {Request, Response} from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { Models } from '../model/db.models';
const models = new Models();

export class Controllers {
  async register(req: Request, res: Response) {
    const body = req.body;
    const {first_name, last_name, email, password, password_confirm} = body;

    if(password !== password_confirm) {
      return res.status(400).send({
      message: "Password's do not match"
      });
    }

    await models.createUser(process.env.DB_TABLE1, first_name, last_name, email, password);

    res.send(body);
  }

  async login(req: Request, res: Response) {
    const body = req.body;
    const {email, password} = body;
    
    const userId = await models.loginAndFindId(process.env.DB_TABLE1, email, password, res);

    if(userId === false) {
      return res.status(400).send({
        message: 'Invalid credentials'
      });
    }

    const accessToken = jsonwebtoken.sign({
      id: userId
    }, process.env.ACCESS_SECRET ?? '', {expiresIn: '30s'});

    const refreshToken = jsonwebtoken.sign({
      id: userId
    }, process.env.REFRESH_SECRET ?? '', {expiresIn: '1w'});

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 24*60*60*1000 // 1 day
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      maxAge: 7*24*60*60*1000 // 7 days
    });

    return res.send({
      message: 'Success'
    });
  }

  async authenticatedUser(req: Request, res: Response) {
    try {
      const access_token_cookie = req.cookies['access_token'];      
      const payload: any = jsonwebtoken.verify(access_token_cookie, process.env.ACCESS_SECRET ?? '');
      
      if(!payload) {
      return res.status(401).send({
        message: 'Unauthenticated'
      });
      } 
    
      const user = await models.findUserById(process.env.DB_TABLE1, payload.id);
    
      if(user === false) {
        return res.status(400).send({
          message: 'Unauthenticated'
        });
      }
    
      res.send(user);
    } catch(err) {
      return res.status(400).send({
        message: 'Unauthenticated'
      });
    }
  }

  async refresh(req: Request, res: Response) {
    try {
      const refresh_token_cookie = req.cookies['refresh_token'];

      const payload: any = jsonwebtoken.verify(refresh_token_cookie, process.env.REFRESH_SECRET ?? '');

      if(!payload) {
      return res.status(401).send({
        message: 'Unauthenticated'
      });
      } 

      const accessToken = jsonwebtoken.sign({
        id: payload.id
      }, process.env.ACCESS_SECRET ?? '', {expiresIn: '30s'});

      res.cookie('access_token', accessToken, {
        httpOnly: true,
        maxAge: 24*60*60*1000 // 1 day
      });

      res.send({
        message: 'Success'
      });
    } catch(err) {
    return res.status(400).send({
      message: 'Unauthenticated'
    });
    }
  }

  async logout(req: Request, res: Response) {
    res.cookie('access_token', '', {
      maxAge: 0
    });
    res.cookie('refresh_token', '', {
      maxAge: 0
    });

    res.send({
      message: 'Success'
    });
  }
}