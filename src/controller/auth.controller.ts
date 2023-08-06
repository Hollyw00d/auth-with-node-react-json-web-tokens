import {Request, Response} from 'express';
import 'dotenv/config';
import {createUser} from '../model/crud/create.user';
import { loginUser } from '../model/crud/login.user';

export const Register = (req: Request, res: Response) => {

 const body = req.body;
 const {first_name, last_name, email, password, password_confirm} = body;

 if(password !== password_confirm) {
  return res.status(400).send({
   message: "Password's do not match"
  });
 }

 createUser(process.env.DB_TABLE1, first_name, last_name, email, password)
  .then((result: any) => {
  });

  res.send(body);
};

export const Login = (req: Request, res: Response) => {
 const body = req.body;
 const {email, password} = body;
 
 loginUser(process.env.DB_TABLE1, email, password, res)
  .then((result: any) => {
  });
};