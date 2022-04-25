const { Configuration, OpenAIApi } = require("openai");
import { OPENAI_API_KEY } from './openaiKey';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const createCompletion = async (prompt: string) => {
  if (!configuration.apiKey) {
    throw new Error('no apiKey for open ai');
  }
  return await openai.createCompletion("text-davinci-002", {
    prompt,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  });
}
