import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

function NoteItem() {
  return (
    <div className="border rounded-lg h-full w-full p-4">
      <div className="">
        <h1 className="font-semibold text-lg py-2">Optimizing Fonts</h1>
        <h1>
          This new font system also allows you to conveniently use all Google
          Fonts with performance and privacy in mind. CSS and font files are
          downloaded at build time and self-hosted with the rest of your static
          assets. No requests are sent to Google by the browser.
        </h1>
      </div>
      <div className="flex justify-end p-2">
        <TrashIcon className="h-8 w-8 cursor-pointer" />
      </div>
    </div>
  );
}

export default NoteItem;
