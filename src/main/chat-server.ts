import http from 'http';
import * as WebSocket from 'ws';

const port = 4444;
const server = http.createServer();
const wss = new WebSocket.Server({ server });

export const startWebsocket = () => {
  server.listen(port, () => {
    console.log(`Data stream server started on port ${port}`);
  });
}

wss.on("connection", (ws: WebSocket) => {
  //connection is up, let's add a simple simple event
  ws.on("message", (message: string) => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
  ws.on('close', () => {
    console.log('see you later');
  });
});


