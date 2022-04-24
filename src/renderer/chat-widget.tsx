// import { useEffect } from 'react';
// import { Widget, addResponseMessage } from 'react-chat-widget';
//
// import 'react-chat-widget/lib/styles.css';
//
// export const ChatWidget = () => {
//   useEffect(() => {
//     addResponseMessage('Welcome to this awesome chat!');
//   }, []);
//
//   const handleNewUserMessage = (newMessage: string) => {
//     console.log(`New message incoming! ${newMessage}`);
//     // Now send the message throught the backend API
//     const response: string = 'someResponse';
//     addResponseMessage(response);
//   };
//
//   return (
//     <div className="chatWidget">
//       <Widget
//         handleNewUserMessage={handleNewUserMessage}
//       />
//     </div>
//   );
// }
