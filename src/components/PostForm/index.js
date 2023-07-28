import React, { useState } from "react";
import "./index.css";
import { upload } from "@testing-library/user-event/dist/upload";
export default function PostForm({ addPost }) {
  let [title, setTitle] = useState("");
  let onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  let resetForm = () => {
    setTitle("");
    console.log("updated successfully");
  };
  let upload_post = (e) => {
    e.preventDefault();
    let post = {
      id: Math.floor(Math.random * 100000),
      title: title,
    };
    resetForm();
    addPost(post);
  };
  return (
    <form className="post-form" onSubmit={upload_post}>
      <h1>Create Post</h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Title"
          onChange={onChangeHandler}
          value={title}
        />

        {/* အပေါ်က onChangeHandler function ကို ဖြုတ်ပီး ဒီလိုရေးလို့ရတယ် */}
        {/*  <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} /> */}
      </div>

      <div className="form-control">
        <button type="submit">Post Now</button>
      </div>
    </form>
  );
}
