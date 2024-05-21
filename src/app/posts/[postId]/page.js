import React from "react";
import { posts } from "@/static";

export default function PostPage({ params: { postId } }) {
  const post = posts.find(post => post.id === Number(postId));

  if (!post) return <div>No post found.</div>;
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
