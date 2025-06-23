
import CoverImage from "./CoverImage";

async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  console.log(posts);
  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg"
        >
         <CoverImage {... post} />
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
