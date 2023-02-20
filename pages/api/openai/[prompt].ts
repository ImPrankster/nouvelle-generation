import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi, Configuration } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.query;
  if (prompt && prompt?.length > 1000)
    return res.status(400).json({ error: "Prompt too long" });

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.2,
    max_tokens: 200,
  });

  const { choices } = response.data;
  const { text } = choices[0];

  res.status(200).json({ text });
}
