import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import pic from "../assets/notes.svg";
import { motion } from "framer-motion";
import Features from "../components/Features";
import Home from "../components/Homesection";

function landing() {
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  return (
    <section className="h-screen w-screen flex flex-col justify-between">
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
      <section className="text-center space-y-8">
        <Home/>
        <Features />
      </section>
    </section>
  );
}

export default landing;
