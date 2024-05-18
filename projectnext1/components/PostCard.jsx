"use client";
import Link from "next/link";
import "./postcard.css";

//react client component
function PostCard({ post }) {
  return (
    <div key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => alert("click")}>click</button>
    </div>
  );
}

export default PostCard;
