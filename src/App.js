import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostLists from "./components/PostLists/index";
import Modal from "./components/Modal/index";

function App() {
  let [showModal, setShowModal] = useState(false);

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
  ]);

  return (
    <div>
      <Navbar setShowModal={setShowModal} />
      <PostLists posts={posts} />
      {showModal && (
        <Modal danger>
          <h1>Terms & Conditions</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            expedita saepe facilis architecto voluptas, suscipit laboriosam
            distinctio voluptatem id aliquid, inventore eligendi ex ipsam culpa
            animi est sunt rem quidem!
          </p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
