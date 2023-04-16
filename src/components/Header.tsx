import { signOut } from "next-auth/react";

export default function Header() {
  return(
      <div className="h-14 border-b flex items-center justify-between px-6">
        <div>
          <h1 className="font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl">Notelist</h1>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => signOut()}
            className="border px-4 py-2 rounded-xl"
          >
            Sign Out
          </button>
        </div>
      </div>
  );
}
