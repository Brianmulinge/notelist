import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";

function landing() {
  return (
    <div className="">
      <Header />
      <div className="flex h-screen w-full flex-col text-center items-center justify-center">
        <Link href="https://github.com/Brianmulinge/notelist">
          <div className="flex rounded-full border items-center px-6 py-2">
            <StarIcon className="h-8 w-8 lg:h-12 lg:w-12" />
            <h1 className="font-semibold text-base md:text-lg lg:text-xl">
              Star on Github
            </h1>
          </div>
        </Link>
        <h1 className="font-bold text-3xl py-4 lg:text-7xl md:text-5xl">
          Notelist, an auto delete note taking app.
        </h1>
        <button
          onClick={() => signIn()}
          className="border rounded-full px-6 py-2 font-semibold border-gray-800 text-base md:text-lg lg:text-xl"
        >
          Sign in to get started.
        </button>
      </div>
    </div>
  );
}

export default landing;
