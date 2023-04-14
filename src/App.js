import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Congrats on such a <big><b>big achievement!!!!</b></big>
        </p>
        <p>Aim high!</p>
        <a
          className="App-link"
          href="https://www.facebook.com/profile.php?id=100015112023682"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Chill Bear
        </a>
      </header>
    </div>
  );
}

export default App;
