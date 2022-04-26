const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;

const db = new JsonDB(new Config("./chatHistory/myChatHistory", true, true, '/'));

export const backUpHistory = (messages: any[]) => {
  messages.forEach(item => {
    db.push("/chatHistory[]", item, true);
  });
}
