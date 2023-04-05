import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import openai from './lib/openai';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

const getRecipe = async () => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Write a recipe based on these ingredients and instructions:\n\nFrito Pie\n\nIngredients:\nFritos\nChili\nShredded cheddar cheese\nSweet white or red onions, diced small\nSour cream\n\nInstructions:",
      temperature: 0.3,
      max_tokens: 120,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    
    console.log(response?.data);
    
    return 'ok';
  } catch (error) {
    console.error(error);
    return "error";
  }

}

app.get('/', async (req: Request, res: Response) => {
  res.send('Express + TypeScript Server lol bro lol');
});

app.get('/recipe', async (req: Request, res: Response) => {
  const recipe = await getRecipe();
  res.send(recipe);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});