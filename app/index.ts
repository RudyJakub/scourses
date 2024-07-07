import express, { Request, Response , Application } from 'express';
import db from './database';

const app: Application = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
  console.log(await db.query('SELECT NOW()'))
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
