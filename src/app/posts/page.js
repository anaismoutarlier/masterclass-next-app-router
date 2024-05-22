// import { useState, useEffect } from "react";
import { Post, AddPostForm } from "@/components";

export default async function PostsPage() {
  const res = await fetch("https://posts-api-yj1i.onrender.com/posts", {
    cache: "no-store",
    headers: {
      apikey: process.env.POSTS_API_KEY,
      "Content-Type": "application/json",
    },
  });
  const { result, posts } = await res.json();
  return (
    <div className="main">
      <AddPostForm />
      <div className="list">
        {result && posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}
