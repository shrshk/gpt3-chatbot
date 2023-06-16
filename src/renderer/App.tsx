import Navbar from 'components/Navbar';
import Main from 'components/Main';
import './App.css';
import 'react-chat-elements/dist/main.css';

export default function App() {
  return (
    <>
      <Navbar className="App-header" />
      <Main/>
    </>
  );
}
