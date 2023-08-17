import path from 'path';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import routes from './routes/routes';
import Utils from './utils/Utils';

const utils = new Utils();
const dirname = utils.getDirRootPath();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true
  })
);

app.use(express.static(path.join(dirname, 'react-auth', 'build')));

routes(app);

app.listen(8000, () => {
  console.log(`Listening to port 8000\nHomepage at: http://localhost:8000/`); // eslint-disable-line no-console
});
