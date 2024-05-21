import React from "react";
import { posts } from "@/static";

export default function CommentPage({ params: { postId, commentId } }) {
  const comment = posts
    .find(post => post.id === Number(postId))
    ?.comments?.find(comment => comment.id === Number(commentId));

  if (!comment) return <div>No comment found</div>;
  return <div>{comment.content}</div>;
}
