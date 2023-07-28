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
              <h2> {posts.title}</h2>
              <h4> {posts.status}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}
