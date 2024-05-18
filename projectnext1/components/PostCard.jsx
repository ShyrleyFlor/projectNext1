"use client";

//react client component
function PostCard({ post }) {
  return (
    <div>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={() => alert("click")}>click</button>
        <hr />
      </div>
    </div>
  );
}

export default PostCard;
