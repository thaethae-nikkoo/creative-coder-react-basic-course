import React, { useState } from "react";
import "./index.css";
export default function PostForm() {
  let [title, setTitle] = useState("");
  let onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  let resetForm = () => {
    setTitle("");
    console.log("updated successfully");
  };
  return (
    <form className="post-form">
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
        <p>{title}</p>
      </div>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>

      <div className="form-control">
        <button>Post Now</button>
      </div>
    </form>
  );
}
