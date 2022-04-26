import http from 'http';
import * as WebSocket from 'ws';
import { createCompletion } from './openai';
import { backUpHistory } from './backup-history';

const port = 4444;
const server = http.createServer();
const wss = new WebSocket.Server({ server });
let messages: any = [];

export const startWebsocket = () => {
  server.listen(port, () => {
    console.log(`Data stream server started on port ${port}`);
  });
}

const STARTER_PROMPT = 'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?';

let prompt = STARTER_PROMPT;

wss.on("connection", (ws: WebSocket) => {
  //connection is up, let's add a simple simple event
  ws.on("message", async (message: string) => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    prompt = `${prompt}\nHuman:${message}`;
    // set all messages history here to add it to prompt.
    try {
      const response = await createCompletion(prompt);
      let responseMessage = '';
      if (response.data && response.data.choices && response.data.choices.length>0) {
        responseMessage = response.data.choices[0].text;
      } else {
        responseMessage = 'no response from openai';
      }
      prompt = `${prompt}\nAI:${responseMessage}`;
      ws.send(responseMessage);
      backupChatHistory(message, responseMessage);
    } catch(e) {
      let errorMsg = 'error getting response from openai ' + e;
      ws.send(errorMsg);
      prompt = STARTER_PROMPT
    }
  });
  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
  ws.on('close', () => {
    console.log('see you later');
    prompt = STARTER_PROMPT
    backUpHistory(messages);
  });
});

enum UserType {
  USER = -1,
  BOT = 0,
}

const backupChatHistory = (userMessage: string, botMessage: string) => {
  const userMessageObj = buildMessageObj(userMessage, UserType.USER);
  const botMessageObj = buildMessageObj(botMessage, UserType.BOT);
  const messagesToAdd = [userMessageObj, botMessageObj];
  messages = [...messages, ...messagesToAdd];
}

const buildMessageObj = (message: string, userType: UserType) => {
  return {
    userType,
    type: 'text',
    text: message,
    date: new Date(),
  };
}


