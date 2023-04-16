import React, { useState } from "react";
import { trpc } from "../utils/trpc";

export default function Input() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = trpc.note.addNote.useMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNote.mutate({ title, content });
    setTitle("");
    setContent("");
  };
  if (createNote.isSuccess) {
    window.location.reload();
  }

  return (
    <div className=" p-4 rounded-lg border mx-6 my-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center font-semibold text-xl py-2">
          Create New Note
        </h1>
        <label className="block font-semibold">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg w-full p-2"
        />
        <label className="block font-semibold">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border rounded-lg w-full p-2"
        />
        <button
          disabled={!title || !content}
          type="submit"
          className="border rounded-full px-6 py-2 font-semibold border-gray-800"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}
