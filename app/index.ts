import express, { Request, Response , Application } from 'express';
import db from './database';

const app: Application = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
  console.log(await db.query('SELECT NOW()'))
  res.send('Welcome to Express & TypeScript Server');
});

db
.connect()
.then(() => {
    console.log("Connected to PostgreSQL")
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
})
.catch((err) => {
    console.error(err)
})
