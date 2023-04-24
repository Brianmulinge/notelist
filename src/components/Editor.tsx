// Editor component
import React, { useState } from "react";
import { trpc } from "../utils/trpc";


interface EditorProps {
  isOpen: boolean;
}

const Editor: React.FC<EditorProps> = ({ isOpen }) => {
  const visibilityStyle = isOpen ? "block" : "hidden";
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
    <>
      <div
        className={`fixed inset-0 bg-neutral-900 bg-opacity-70 ${visibilityStyle}`}
        style={{ backdropFilter: "blur(5px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex items-center h-full w-full justify-center ${visibilityStyle}`}>
          <div className="w-full h-auto p-4 rounded-lg border mx-6 my-4">
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
                className="border border-white rounded-full px-6 py-2 font-semibold "
              >
                Add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
