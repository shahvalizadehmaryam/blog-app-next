import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";
import React from "react";

async function Category({ params , searchParams }) {
   console.log(searchParams);
   const { categorySlug } = params;
    const queries = `${queryString.stringify(searchParams)}&categorySlug=${categorySlug}`;
    const cookieStore = cookies();
    const options = setCookieOnReq(cookieStore);
    const posts = await getPosts(queries , options);
  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          هیچ پستی در این دسته بندی یافت نشد.
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;
