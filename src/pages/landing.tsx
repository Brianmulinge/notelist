import React from "react";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import Image from "next/image";
import pic from "../assets/notes.svg";

function landing() {
  return (
    <section
      style={{}}
      className="h-screen w-screen flex flex-col justify-between"
    >
      <section className="flex justify-between items-center h-14 px-4 border-b">
        <h1 className="font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl">
          Notelist
        </h1>
        <button
          onClick={() => signIn()}
          className="border px-4 py-2 rounded-xl"
        >
          Sign In
        </button>
      </section>
      <section className="text-center mx-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <h1 className="font-bold text-5xl md:text-7xl lg:8xl text-transparent bg-clip-text bg-gradient-to-br bg-neutral-800">
            Notelist
          </h1>
          <h1 className="font-bold text-3xl md:text-5xl lg:7xl text-transparent bg-clip-text bg-gradient-to-br bg-neutral-800">
            The best way to keep your notes in check
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex h-auto w-full justify-center"
        >
          <Image src={pic} className="p-8" alt="notes_svg" />
        </motion.div>
      </section>
      <section className="border-t h-14 flex  items-center justify-center">
        <h1 className="text-sm">Notelist, All Rights Reserved @2023</h1>
      </section>
    </section>
  );
}

export default landing;
