import React from "react";
import { posts } from "@/static";
import { Post } from "@/components";

export default function PostsPage({
  params: { categorization = [] },
  searchParams,
}) {
  console.log(searchParams);
  let postsToDisplay = posts.filter(post =>
    categorization.every(el =>
      post.categorization.map(e => e.toLowerCase()).includes(el.toLowerCase())
    )
  );
  if (searchParams?.tag)
    postsToDisplay = postsToDisplay.filter(post =>
      post.tags
        .map(tag => tag.toLowerCase())
        .includes(searchParams?.tag.toLowerCase())
    );
  return (
    <div className="main">
      <div className="list">
        {postsToDisplay.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
