import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChatClient } from '../renderer/chat-client';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import './Main.css'


export default function Main() {
  // const imageString = 'data:image/png;base64,iVBORw0KG...'; // Your base64 string here
  const imageString = ''

  return (
    <div className='grid-parent'>
      <div className='grid-left'>
        <h1 className='grid-title'>Meet <b className='ottogpt'>OttoGPT</b></h1>
        <ul className='grid-list'>
          <li>✅ Understands plain English</li>
          <li>✅ Results in seconds</li>
          <li>✅ Visualize your data </li>
          <li>✅ Available 24/7</li>
        </ul>
        {
          imageString &&
          <Card className='message-image'>
            <CardMedia
              component="img"
              height="140"
              image={imageString}
              alt="User Image"
            />
          </Card>
        }
      </div>
      <div className='grid-right'>
        <ChatClient />
      </div>
    </div>
  )
}
