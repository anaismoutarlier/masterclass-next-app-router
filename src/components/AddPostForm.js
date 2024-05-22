"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const fields = [
  {
    name: "title",
  },
  {
    name: "content",
  },
];
export function AddPostForm() {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch("https://posts-api-yj1i.onrender.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.NEXT_PUBLIC_POSTS_API_TOKEN}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if (data.result) router.refresh();
  };
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>Add new post</h3>
      {fields.map(field => (
        <input key={field.name} {...field} onChange={handleChange} />
      ))}
      <button>Send</button>
    </form>
  );
}
