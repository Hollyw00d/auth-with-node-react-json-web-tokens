import {Request, Response} from 'express';
import {verify} from 'jsonwebtoken';
import {createUser} from '../model/crud/create.user';
import { loginUser } from '../model/crud/login.user';
import { findUserById } from '../model/crud/find-by-id.user';

export const Register = async (req: Request, res: Response) => {

 const body = req.body;
 const {first_name, last_name, email, password, password_confirm} = body;

 if(password !== password_confirm) {
  return res.status(400).send({
   message: "Password's do not match"
  });
 }

 await createUser(process.env.DB_TABLE1, first_name, last_name, email, password);

 res.send(body);
};

export const Login = async (req: Request, res: Response) => {
 const body = req.body;
 const {email, password} = body;
 
 await loginUser(process.env.DB_TABLE1, email, password, res);
};

export const AuthenticatedUser = async (req: Request, res: Response) => {
  try {
    const access_token_cookie = req.cookies['access_token'];
  
    const payload: any = verify(access_token_cookie, process.env.ACCESS_SECRET ?? '');
  
    if(!payload) {
     return res.status(401).send({
      message: 'Unauthenticated'
     });
    } 
  
    const user = await findUserById(process.env.DB_TABLE1, payload.id);
  
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
};