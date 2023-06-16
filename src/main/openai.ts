const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// eslint-disable-next-line import/prefer-default-export
export const createCompletion = async (prompt: string) => {
  if (!configuration.apiKey) {
    throw new Error('no apiKey for open ai');
  }
  return openai.createCompletion('text-davinci-002', {
    prompt,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [' Human:', ' AI:'],
  });
};
