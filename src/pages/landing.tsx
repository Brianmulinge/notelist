import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import Header from "../components/Header";
import Link from "next/link";

function landing() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="flex text-center flex-col justify-center items-center">
        <Link href="https://github.com/Brianmulinge/notelist">
          <div className="flex rounded-full border items-center my-6 px-6 py-2">
            <StarIcon className="h-8 w-8" />
            <h1 className="font-semibold text-sm">Star on Github</h1>
          </div>
        </Link>
        <h1 className="font-bold text-3xl">
          Welcome to Notelist, an auto delete note taking app.
        </h1>
        <button className="my-4 border rounded-full px-6 py-2 font-semibold border-gray-800">
          Sign in to get started.
        </button>
      </div>
    </div>
  );
}

export default landing;
