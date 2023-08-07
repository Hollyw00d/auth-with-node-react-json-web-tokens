import bycryptjs from 'bcryptjs';
import { RowDataPacket } from 'mysql2';
import {pool} from './db.connect';

export class Models {
 async createUser(db_name: any, first_name: string, last_name: string, email: string, password: string) {
  const hashedPW = await bycryptjs.hash(password, 12);

  await pool.query(`
   INSERT INTO ${db_name} (first_name, last_name, email, password) VALUES (?, ?, ?, ?)
  `, [first_name, last_name, email, hashedPW]);
 }

 async findUserById(db_name: any, id: any) {

    const [user] = await pool.query(`
    SELECT * FROM ${db_name} WHERE id = ?
   `, [id]);

   const getUserEmail = (user as RowDataPacket[])[0]?.email ?? '';

   if(!getUserEmail) {
      return false;
   }
   
   const getUser = (user as RowDataPacket[])[0];
   delete getUser.password;

   return getUser;   
 }

 async findResetByEmail(db_name: any, email: string) {
    const [reset] = await pool.query(`
    SELECT * FROM ${db_name} WHERE email = ?
    AND id=(SELECT max(id) FROM ${db_name})`, [email]);

   const getEmail = (reset as RowDataPacket[])[0]?.email ?? '';
   
   if(!getEmail) {
      return false;
   }

   const getResetEntry = (reset as RowDataPacket[])[0];

   return getResetEntry;
 }

 async loginAndFindId(db_name: any, email: string, password: string, res: any) {
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

 async createResetEntry(db_name: any, email: string, token: string) {
  await pool.query(`
   INSERT INTO ${db_name} (email, token) VALUES (?, ?)
  `, [email, token]);
 }
}