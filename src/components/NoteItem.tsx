import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { trpc } from "../utils/trpc";

function NoteItem(
  { note }: { note: { title: string; content: string } },
  handleDelete: () => void
) {
  return (
    <div className="border rounded-lg h-full w-full p-4">
      <div className="">
        <h1 className="font-semibold text-lg py-2">{note.title}</h1>
        <h1>{note.content}</h1>
      </div>
      <div className="flex justify-end p-2">
        <TrashIcon className="h-8 w-8 cursor-pointer" />
      </div>
    </div>
  );
}

export default NoteItem;
