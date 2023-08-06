import {verify} from 'jsonwebtoken';
import { findUserById } from './find-by-id.user';

export async function authenticatedUser(access_token_cookie: any, res: any) {
 try {
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
}