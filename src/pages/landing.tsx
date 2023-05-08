import React from "react";
import { signIn } from "next-auth/react";
import Features from "../components/Features";
import Home from "../components/Homesection";
import FooterSimple from "../components/Footer";
import Footer from "../components/Footer";

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
          className="border px-4 py-2 m-2 rounded-xl"
        >
          Sign In
        </button>
      </section>
      <section className="h-full w-full">
        <Home/>
        <Features />
      </section>
      <Footer />
    </section>
  );
}

export default landing;
