import {Request, Response} from 'express';
import { Models } from '../model/db.models';
const models = new Models();

export class ForgotControllers {
 async forgot(req: Request, res: Response) {
  const {email} = req.body;
  const token = Math.random().toString(20).slice(2, 12);

  await models.createResetEntry(process.env.DB_TABLE2, email, token);

  const getResetEntry = await models.findResetByEmail(process.env.DB_TABLE2, email);

  if(getResetEntry === false) {
   return res.status(400).send({
    message: 'Something went wrong'
   });
  }
 
  res.send(getResetEntry);
 }
}