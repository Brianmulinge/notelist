import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { signOut } from "next-auth/react";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Home(props) {
  return (
    <div className="bg-black text-white h-screen w-screen">
      <Head>
        <title>Notelist</title>
        <meta
          name="description"
          content="Created using Nextjs, Tailwindcss, Prisma, Nextauth, Planetscale and Vercel"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-center font-bold">home</h1>
          <button className="border p-2 rounded-lg" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
