import {pool} from '../../model/db.connect';
import { RowDataPacket } from 'mysql2';

export async function findUserById(db_name: any, id: any) {

   const [user] = await pool.query(`
   SELECT * FROM ${db_name} WHERE id = ?
  `, [id]);

  const getUserEmail = (user as RowDataPacket[])[0]?.email ?? '';

  if(getUserEmail === undefined) {
     return false;
  }
  
  const getUser = (user as RowDataPacket[])[0];
  delete getUser.password;

  return getUser;   
}