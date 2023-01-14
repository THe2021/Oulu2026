import kartta from './kartta.JPG';
import './App.css';

function App() {

  return (
    <div>
        <img src={kartta} className="App-logo" alt="kartta" />
        <p>
          Oulu2026
        </p>
        <a
          className="App-link"
          href="https://www.raflaamo.fi/fi/ravintola/oulu/rosso-oulu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rosso
        </a>
    </div>
  );
}

export default App;
