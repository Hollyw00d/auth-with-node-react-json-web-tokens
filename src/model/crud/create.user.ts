import bycryptjs from 'bcryptjs';
import {pool} from '../../model/db.connect';

export async function createUser(db_name: any, first_name: string, last_name: string, email: string, password: string) {
  const hashedPW = await bycryptjs.hash(password, 12);

  await pool.query(`
   INSERT INTO ${db_name} (first_name, last_name, email, password) VALUES (?, ?, ?, ?)
  `, [first_name, last_name, email, hashedPW]);
 }