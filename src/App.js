import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div id="root" className="App" data-api="98785433" data-bpi="3343343434343" data-url="454535353">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header></Header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
