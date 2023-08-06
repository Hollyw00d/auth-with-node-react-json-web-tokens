import bycryptjs from 'bcryptjs';
import {pool} from '../../model/db.connect';
import { RowDataPacket } from 'mysql2';

export async function loginUser(email: string, password: string, res: any) {
  const [user] = await pool.query(`
   SELECT * FROM user WHERE email = ?
  `, [email]);

  if(!user) {
   return res.status(400).send({
    message: 'Invalid credentials'
   });
  }

  res.send(user);
}
