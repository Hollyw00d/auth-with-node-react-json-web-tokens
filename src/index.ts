import express from 'express';
import 'dotenv/config'
import {routes} from './routes';
import {pool} from './model/db.connect';

const app = express();
app.use(express.json());

pool;

routes(app);

app.listen(8000, () => {
 console.log(`Listening to port 8000\nHomepage at: http://localhost:8000/`);
});