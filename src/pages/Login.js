import { signIn } from "next-auth/react";

export default function Login({ email }) {
  return (
    <section className="h-screen p-6 flex justify-center items-center w-full bg-black text-white">
      <form className="p-6 rounded-lg text-center text-xl font-semibold">
        <h1 className="py-4">Sign In To Your Account</h1>
        <button
          className="border rounded-lg p-4 m-4"
          onClick={() => signIn("email", { email })}
        >
          Sign in with Google
        </button>
      </form>
    </section>
  );
}
