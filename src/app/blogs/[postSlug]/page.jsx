import { getPostBySlug } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

// dynamic metadata for single post
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.postSlug);
  return {
    title: `پست ${post.title}`,
  };
}

async function SinglePost({ params }) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
  const post = await getPostBySlug(params.postSlug);
  if (!post) notFound();
  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
        />
      </div>
    </div>
  );
}

export default SinglePost;
