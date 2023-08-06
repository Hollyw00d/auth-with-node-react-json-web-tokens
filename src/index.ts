import express, {Request, Response, NextFunction} from 'express';
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

app.get('/', (req: Request, res: Response) => {
 res.send('Hello');
});

app.listen(8000, () => {
 console.log(`Listening to port 8000\nHomepage at: http://localhost:8000/`);
});