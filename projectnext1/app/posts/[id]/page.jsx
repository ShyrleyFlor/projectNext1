
async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    return post
}
async function PostID({ params }) {

    const post = await loadPost(params.id)

    return (
        <div>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default PostID