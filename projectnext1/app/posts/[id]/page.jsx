import Posts from "../page";
import { Suspense } from "react";
import Loading from "@/app/loading";
async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return post;
}
async function PostID({ params }) {
  const post = await loadPost(params.id);

  return (
    <div>
      <h2>{post.id}</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <h3>Otras publicaciones</h3>
      <Suspense fallback={<Loading />}>
        <Posts />
      </Suspense>
    </div>
  );
}

export default PostID;
