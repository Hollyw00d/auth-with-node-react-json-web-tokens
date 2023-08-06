import {Request, Response} from 'express';

export class ForgotControllers {
 forgot(req: Request, res: Response) {
  const {email} = req.body;
  const token = Math.random().toString(20).substring(2, 12);
 
  res.send(token);
 }
}