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
      id: 0,
      title: "Fourth Post",
    },
  ]);
  console.log(posts);
  let changeName = () => {
    // name = "pyae sone aung";
    setName("pyae sone aung");
    console.log(name);
  };
  let deletePost = (id) => {
    //filter (parameter , condition)
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };
  return (
    <div className="App">
      <p className="paragraph">
        My name is <strong>{name}</strong>
      </p>
      <button onClick={changeName}>Change Name</button>
      <ul>
        {!!posts.length &&
          posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <br /> <button onClick={() => deletePost(post.id)}>Delete</button>
            </li>
          ))}
        {!posts.length && <p>No posts available.</p>}
      </ul>
    </div>
  );
}

export default App;
