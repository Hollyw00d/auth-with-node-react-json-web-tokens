import bycryptjs from 'bcryptjs';
import {pool} from '../db.connect';
import { RowDataPacket } from 'mysql2';

export async function loginAndFindId(db_name: any, email: string, password: string, res: any) {
  const [user] = await pool.query(`
   SELECT * FROM ${db_name} WHERE email = ?
  `, [email]);

  const getUserEmail = (user as RowDataPacket[])[0]?.email ?? '';
  const getUserPassword = (user as RowDataPacket[])[0]?.password ?? '';

  const userPwValid = await bycryptjs.compare(password, getUserPassword);

  if(getUserEmail === undefined || userPwValid === false) {
    return false;
  }

  const getUser = (user as RowDataPacket[])[0];
  delete getUser.password;
  const userId = getUser.id;

  return userId;
}
