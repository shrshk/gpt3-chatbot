import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChatClient } from './chat-client';
import './App.css';
import 'react-chat-elements/dist/main.css';

const Chat = () => {
  return (
    <>
      <div>
        <Link to='/'>
          <button type="button">
            Go back
          </button>
        </Link>
      </div>
      <div>
        <ChatClient />
      </div>
    </>
  )
}

const Hello = () => {
  return (
    <div>
      <Link to='/chat'>
        <button type="button">
          Chat
        </button>
      </Link>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}
