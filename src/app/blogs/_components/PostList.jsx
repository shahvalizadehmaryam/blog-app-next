async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  console.log(posts);
  return posts.length > 0
    ? posts.map((post) => <div key={post.id}>{post.title}</div>)
    : null;
}

export default PostList;
