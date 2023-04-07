import openai from "../../lib/openai";

export const getRecipe = async () => {
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