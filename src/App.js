import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostLists from "./components/PostLists/index";

function App() {
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

  return (
    <div>
      <Navbar /> <PostLists posts={posts} />
    </div>
  );
}

export default App;
