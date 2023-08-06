import {Request, Response} from 'express';
import {createUser} from '../model/crud/create.user';
import { loginUser } from '../model/crud/login.user';
import { authenticatedUser } from '../model/crud/authenticated.user';

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

export const AuthenticatedUser = (req: Request, res: Response) => {
  const cookie = req.cookies['access_token'];

  authenticatedUser(cookie, res)
    .then((result: any) => {
    });
};