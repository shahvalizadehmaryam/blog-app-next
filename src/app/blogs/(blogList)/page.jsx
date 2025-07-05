import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";

// export const experimental_ppr = true // Enable Partial Prerendering
async function BlogPage() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options);
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export default BlogPage;
