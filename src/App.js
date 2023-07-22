import logo from "./logo.svg";
import "./App.css";
import Image from "./assets/moonsoon.jpg";

function App() {
  let name = "thae nandar soe";
  let changeName = () => {
    name = "pyae sone aung";
    console.log(name);
  };
  return (
    <div className="App">
      <p className="paragraph">
        My name is <strong>{name}</strong>
      </p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
