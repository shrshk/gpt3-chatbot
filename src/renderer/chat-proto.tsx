// import React, { useEffect, useRef, useState } from "react";
// import { MessageList, Button, Input } from 'react-chat-elements';
// // import Identicon from 'identicon.js';
//
// // const photo = () => {
// //   return new Identicon(String(Math.random()) + String(Math.random()), {
// //     margin: 0,
// //     size: 20,
// //   }).toString()
// // };
//
// const useForceUpdate = () => {
//   const [, setValue] = useState(0);
//   return () => setValue(value => value + 1);
// };
//
// // const tempDataSource = [
// //   {
// //     position: 'right',
// //     type: 'text',
// //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
// //     title: "user",
// //     titleColor: "#8717ae",
// //     avatar: `data:image/png;base64,${photo()}`,
// //     date: new Date(),
// //   },
// //   {
// //     position: 'left',
// //     type: 'text',
// //     title: "user",
// //     titleColor: "#8717ae",
// //     text: 'blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit',
// //     date: new Date(),
// //   }];
//
// let clearRef = () => {};
//
// export const ChatProto = () => {
//   let messageListReferance = useRef();
//   let inputReferance = useRef();
//
//   const [messageList, setMessageList] = useState([]);
//
//   console.log('state below');
//   console.log(messageList);
//
//   const forceUpdate = useForceUpdate();
//
//   const addMessage = () => {
//     console.log(inputReferance.current);
//     let list = messageList;
//     // @ts-ignore
//     // @ts-ignore
//     list.push({
//       position: 'left',
//       type: 'text',
//       title: "user",
//       titleColor: "#8717ae",
//       text: inputReferance.current ? inputReferance.current.value : 'empty',
//       date: new Date(),
//     });
//     setMessageList(list);
//     console.log(list);
//     clearRef();
//     forceUpdate();
//   }
//
//   return (
//     <>
//     <MessageList
//       referance={messageListReferance}
//       className='message-list'
//       toBottomHeight={'100%'}
//       dataSource={messageList}
//     />
//     <Input
//       placeholder="Mesajınızı buraya yazınız."
//       defaultValue=""
//       referance={inputReferance}
//       clear={(clear: any) => clearRef = clear}
//       onKeyPress={(e: any) => {
//         if (e.shiftKey && e.charCode === 13) {
//           return;
//         }else if (e.charCode === 13) {
//           clearRef();
//           addMessage();
//         }
//       }}
//       rightButtons={
//         <Button
//           text='enter'
//           onClick={() => addMessage()} />
//       } />
//     </>
//   )
// }
