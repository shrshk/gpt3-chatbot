import { useState, useCallback, useEffect } from "react";
// @ts-ignore
import { MessageList, Button, Input } from 'react-chat-elements';
import useWebSocket, { ReadyState } from 'react-use-websocket';

enum UserType {
  USER = -1,
  BOT = 0,
}

const userTypeToFloat = (userType: UserType) => {
  return {
    [UserType.USER] : 'left',
    [UserType.BOT] : 'right',
  }[userType];
};

const userTypeToTitle = (userType: UserType) => {
  return {
    [UserType.USER] : 'user',
    [UserType.BOT] : 'bot',
  }[userType];
};

const buildMessageObj = (message: string, userType: UserType) => {
  return {
    position: userTypeToFloat(userType),
    type: 'text',
    title: userTypeToTitle(userType),
    titleColor: "#8717ae",
    text: message,
    date: new Date(),
  };
}

export const ChatClient = () => {
  //Public API that will echo messages sent to it back to the client
  const socketUrl = 'ws://localhost:4444'; // TO DO: set it from a config file.
  const [messageHistory, setMessageHistory] = useState([]);
  const [messageText, setMessageText] = useState('');

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage == null) {
      return;
    }
    const userMessageObj = buildMessageObj(messageText, UserType.USER);
    const botMessageObj = buildMessageObj(lastMessage.data, UserType.BOT);
    let messagesToAdd: any = [];
    if (messageText!='') {
      messagesToAdd.push(userMessageObj);
    }
    messagesToAdd.push(botMessageObj);
    setMessageHistory((prev:any) => prev.concat(messagesToAdd));
  }, [lastMessage, setMessageHistory]);

  const handleClickSendMessage = () => useCallback(() => {
    sendMessage(messageText);
  }, [messageText, setMessageText]);

  const handleEnterKey = () => {
    sendMessage(messageText);
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
      <span>The WebSocket is currently {connectionStatus}</span>
      <MessageList
        className='message-list'
        toBottomHeight={'100%'}
        dataSource={messageHistory}
      />
      <Input
        placeholder="Mesajınızı buraya yazınız."
        defaultValue=""
        onKeyPress={(e: any) => {
          if (e.shiftKey && e.charCode === 13) {
            return;
          }else if (e.charCode === 13) {
            if (readyState !== ReadyState.OPEN) {
              return;
            }
            handleEnterKey();
          }
        }}
        value={messageText}
        onChange={(e: any) => setMessageText(e.target.value)}
        rightButtons={
          <Button
            text='enter'
            onClick={handleClickSendMessage()}
          />
        }
      />
    </div>
  );
};
