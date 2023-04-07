import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createUser, getUser } from './src/controllers/user';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async (req: Request, res: Response) => {
  res.send('Express + TypeScript Server lol bro lol');
});

app.post('/createUser', createUser)

app.get('/getUser', getUser)

// app.get('/recipe', async (req: Request, res: Response) => {
//   const recipe = await getRecipe();
//   res.send(recipe);
// }); 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});