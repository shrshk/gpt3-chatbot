import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChatClient } from '../renderer/chat-client';
import './Main.css'


export default function Main() {
  return (
    <div className='grid-parent'>
      <div className='grid-left'>
        <h1 className='grid-title'>Meet <b className='ottogpt'>OttoGPT</b></h1>
        <ul>
          <li>Understands plain English</li>
          <li>Results in seconds</li>
          <li>Available 24/7</li>
        </ul>
        <br/>
        <h5>Try it now!</h5>
      </div>
      <div className='grid-right'>
        <ChatClient />
      </div>
    </div>
  )
}
