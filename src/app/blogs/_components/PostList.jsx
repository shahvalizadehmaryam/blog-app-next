import Image from "next/image";

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
          <div className="relative aspect-video rounded-md overflow-hidden mb-6"> 
            <Image src={post.coverImageUrl} alt={post.title} fill className="object-cover object-center hover:scale-110 duration-300 ease-out" quality={80} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
