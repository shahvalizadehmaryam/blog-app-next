import Link from "next/link";
import CoverImage from "./CoverImage";
import { ClockIcon } from "@heroicons/react/24/outline";
import Author from "./Author";
import PostInteraction from "./PostInteraction";

async function PostList() {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
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
          <CoverImage {...post} />
          {/* post author */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="font-bold mb-4 text-secondary-700">
                {post.title}
              </h2>
            </Link>

            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              {/* clock part */}
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1">خواندن:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
            <PostInteraction post={post} />
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
