import PostCard from "@/components/PostCard";
async function loadPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return posts;
}

//renderiza los posts
async function Posts() {
    const posts = await loadPosts();

    console.log(posts);
    return (
        <div>
            {
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    );
}

export default Posts;