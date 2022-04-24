import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChatClient } from './chat-client';
import icon from '../../assets/icon.svg';
import './App.css';
import 'react-chat-elements/dist/main.css';

const Chat = () => {
  return (
    <div>
      Chat app is building....
      <Link to='/'>
        <button type="button">
          Home
        </button>
      </Link>
      <ChatClient />
    </div>
  )
}

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
        <Link to='/chat'>
          <button type="button">
            Chat
          </button>
        </Link>
        <Link to='/chatWidget'>
          <button type="button">
            Chat Widget
          </button>
        </Link>
        <Link to='/myInput'>
          <button type="button">
            MyInputTest
          </button>
        </Link>
      </div>
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
