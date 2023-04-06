import React from "react";
import { signIn } from "next-auth/react";

function landing() {
  return (
    <section className="h-screen w-screen flex flex-col justify-between">
      <section className="flex justify-between items-center h-14 px-4 border-b">
        <h1 className="font-semibold text-xl">Notelist</h1>
        <button
          onClick={() => signIn()}
          className="border px-4 py-2 rounded-xl"
        >
          SignIn
        </button>
      </section>
      <section className="text-center mx-4 space-y-8">
        <div className="">
          <h1 className="font-bold text-3xl md:text-5xl lg:7xl">
            Notelist, the best way to keep your notes in check
          </h1>
        </div>
        <div className="border rounded-lg h-40">
          <h1>Image</h1>
        </div>
      </section>
      <section className="h-14 w-full flex flex-col justify-center items-center border-t  inset-x-0 bottom-0">
      <h1>Created By Brian Mulinge</h1>
        <h1>Notelist All Copyrights Reserved @2023</h1>
      </section>
    </section>
  );
}

export default landing;
