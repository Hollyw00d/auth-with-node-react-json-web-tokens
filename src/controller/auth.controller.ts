import {Request, Response} from 'express';
import 'dotenv/config';
import {createUser} from './crud/create.user';
import { loginUser } from './crud/login.user';

export const Register = (req: Request, res: Response) => {

 const body = req.body;
 const {first_name, last_name, email, password, password_confirm} = body;

 let formSuccess: boolean = false;

 if(password !== password_confirm) {
  return res.status(400).send({
   message: "Password's do not match"
  });
 }

 createUser(process.env.DB_TABLE1, first_name, last_name, email, password)
  .then((result: any) => {
   console.log('New user added!');
   formSuccess = true;
  });

 loginUser(email, password, res)
  .then((result: any) => {
   console.log('Logged in!');
  }) ;

  if(formSuccess) {
   return res.send(body);
  }

 // async function createUser(first_name: string, last_name: string, email: string, password: string) {
 //  const hashedPW = await bycryptjs.hash(password, 12);

 //  const [user] = await pool.query(`
 //   INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)
 //  `, [first_name, last_name, email, hashedPW]);

 //  return res.send(user);
 // }

 // createUser(first_name, last_name, email, password)
 //  .then((result) => {
 //   console.log('New user added!');
 //  });

 // return res.send(body);
};

export const Login = (req: Request, res: Response) => {

};