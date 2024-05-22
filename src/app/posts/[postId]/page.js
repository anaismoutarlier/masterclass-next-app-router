import React from "react";
// import { posts } from "@/static";

export default async function PostPage({ params: { postId } }) {
  const res = await fetch(
    `https://posts-api-yj1i.onrender.com/posts/${postId}`,
    {
      headers: {
        apikey: process.env.POSTS_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
  const { result, post } = await res.json();

  if (!result || !post) return <div>No post found.</div>;
  return (
    <div className="main">
      <div className="post">
        <h1>{post.title}</h1>
        <h2>{post.content}</h2>
        <h5>{post.createdAt}</h5>
        <div>
          <h4>Commentaires</h4>
          {post.comments.map(comment => (
            <div key={comment.id}>
              {comment.content} - {comment.createdBy}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
