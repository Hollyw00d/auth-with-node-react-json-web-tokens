import express, {Request, Response} from 'express';
import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2';
import 'dotenv/config'

const app = express();
app.use(express.json());

const pool = mysql.createPool({
 host: process.env.DB_HOST,
 user: process.env.DB_USER,
 password: process.env.DB_PASSWORD,
 database: process.env.DB_NAME
}).promise();

async function getNotes() {
 const [rows] = await pool.query("SELECT * FROM notes");
 return rows;
}

async function getNote(id: number) {
 const [rows] = await pool.query(`SELECT * 
 FROM notes
 WHERE id = ?
 `, [id]);
 return (rows as RowDataPacket[])[0];
}

async function createNote(title: string, content: string) {
 const [result] = await pool.query(`
 INSERT INTO notes (title, contents)
 VALUES (?, ?)
 `, [title, content]);
 const id: number = (result as ResultSetHeader).insertId;

 return getNote(id);
}

getNotes()
 .then((notes) => {
  console.log('All notes!');
  console.log(notes);
 });

getNote(1)
 .then((note) => {
  console.log('Single Note');
  console.log(note);
 });
 
createNote('My Important Note', 'Important Note Body')
 .then((result) => {
  console.log('View New Note');
  console.log(result);
 }); 

app.get('/', (req: Request, res: Response) => {
 res.send('Hello');
});

app.get('/notes', async (req: Request, res: Response) => {
getNotes()
 .then((notes) => {
  res.send(notes);
 });

});

app.listen(8000, () => {
 console.log('listening to port 8000');
});