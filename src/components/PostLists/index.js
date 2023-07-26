import React from "react";
import "./index.css";
import styles from "./single_post.module.css";
export default function PostLists({ posts }) {
  return (
    <div className="postlists-component ">
      <div className="postList container">
        {!!posts.length &&
          posts.map((posts) => (
            <div key={posts.id} className={`single-post ${styles.card}`}>
              {posts.title}
            </div>
          ))}
      </div>
    </div>
  );
}
