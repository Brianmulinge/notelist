import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <div className="h-14 border-b flex items-center justify-between px-6">
          <div>
            <h1 className="font-semibold text-2xl">Notelist</h1>
          </div>
          <div>
            <button
              onClick={() => signIn()}
              className="border rounded-full px-6 py-2 font-semibold border-gray-800"
            >
              Sign In
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="h-14 border-b flex items-center justify-between px-6">
        <div>
          <h1 className="font-semibold text-2xl">Notelist</h1>
        </div>
        <div className="flex space-x-2">
          <Image
            src={session.user?.image ?? ""}
            alt="profile picture"
            className="rounded-full h-full"
            width={40}
            height={40}
          />
          <button
            onClick={() => signOut()}
            className="border rounded-full px-6 py-2 font-semibold border-gray-800"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
