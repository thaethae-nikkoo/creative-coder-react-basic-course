import logo from "./logo.svg";
import "./App.css";
import Image from "./assets/moonsoon.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Carefully
        </a>
        {/* <img src="/moonsoon.jpg" width="300" height="300" alt="" /> */}
        <img src={Image} width="300" height="300" alt="" />
      </header>
    </div>
  );
}

export default App;
