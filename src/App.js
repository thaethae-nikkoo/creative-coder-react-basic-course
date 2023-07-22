import logo from "./logo.svg";
import "./App.css";
import Image from "./assets/moonsoon.jpg";
import { useState } from "react";

function App() {
  // let name = "thae nandar soe";
  let [name, setName] = useState("thae nandar soe");
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 2,
      title: "Second Post",
    },
    {
      id: 3,
      title: "Third Post",
    },
    {
      id: 4,
      title: "Fourth Post",
    },
  ]);
  console.log(posts);
  let changeName = () => {
    // name = "pyae sone aung";
    setName("pyae sone aung");
    console.log(name);
  };
  return (
    <div className="App">
      <p className="paragraph">
        My name is <strong>{name}</strong>
      </p>
      <button onClick={changeName}>Change Name</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
