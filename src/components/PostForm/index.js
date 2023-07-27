import React, { useState } from "react";
import "./index.css";
export default function PostForm() {
  let [title, setTitle] = useState("");
  let onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form className="post-form">
      <h1>Create Post</h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input type="text" placeholder="Title" onChange={onChangeHandler} />

        {/* အပေါ်က onChangeHandler function ကို ဖြုတ်ပီး ဒီလိုရေးလို့ရတယ် */}
        {/*  <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} /> */}
        <p>{title}</p>
      </div>

      <div className="form-control">
        <button>Post Now</button>
      </div>
    </form>
  );
}
