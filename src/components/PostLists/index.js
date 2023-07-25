import React from "react";
import "./index.css";
export default function PostLists({ posts }) {
  return (
    <div className="postlists-component">
      <div className="postList">
        {!!posts.length &&
          posts.map((posts) => (
            <div key={posts.id} className="single-post">
              {posts.title}
            </div>
          ))}
      </div>
    </div>
  );
}
