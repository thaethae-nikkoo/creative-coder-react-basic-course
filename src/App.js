import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostLists from "./components/PostLists/index";
import PostForm from "./components/PostForm/index";
import Modal from "./components/Modal/index";

function App() {
  let [showModal, setShowModal] = useState(false);

  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      status: "dropped",
    },
    {
      id: 2,
      title: "Second Post",
      status: "upcoming",
    },
  ]);
  let addPost = (post) => {
    setPosts((prevState) => [...prevState, post]);
    setShowModal(false);
  };

  return (
    <div>
      <Navbar setShowModal={setShowModal} />
      <PostLists posts={posts} />
      {showModal && (
        <Modal danger setShowModal={setShowModal}>
          <PostForm addPost={addPost} />
        </Modal>
      )}
    </div>
  );
}

export default App;
