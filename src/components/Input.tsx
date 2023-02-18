import React from "react";

function Input() {
  return (
    <div className=" p-4 rounded-lg border mx-12 my-4">
      <form>
        <h1 className="text-center font-semibold text-xl py-2">
          Create New Note
        </h1>
        <label className="block font-semibold">Title</label>
        <input className="border rounded-lg w-full p-2" />
        <label className="block font-semibold">Description</label>
        <textarea className="border rounded-lg w-full p-2" />
        <button className="border rounded-full px-6 py-2 font-semibold border-gray-800">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default Input;
