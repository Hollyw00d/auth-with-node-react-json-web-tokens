import bycryptjs from 'bcryptjs';
import {sign} from 'jsonwebtoken';
import {pool} from '../../model/db.connect';
import { RowDataPacket } from 'mysql2';

export async function loginUser(db_name: any, email: string, password: string, res: any) {
  const [user] = await pool.query(`
   SELECT * FROM ${db_name} WHERE email = ?
  `, [email]);

  const getUserEmail = (user as RowDataPacket[])[0]?.email ?? '';
  const getUserPassword = (user as RowDataPacket[])[0]?.password ?? '';

  const userPwValid = await bycryptjs.compare(password, getUserPassword);

  if(getUserEmail === undefined || userPwValid === false) {
     return res.status(400).send({
      message: 'Invalid credentials'
     });
  }

  const getUser = (user as RowDataPacket[])[0];
  delete getUser.password;
  const userId = getUser.id;

  const accessToken = sign({
    id: userId
  }, process.env.ACCESS_SECRET ?? '', {expiresIn: '30s'});

  const refreshToken = sign({
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
