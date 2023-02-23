import { getServerSession } from "next-auth/next";
import Head from "next/head";
import Header from "../components/Header";
import Input from "../components/Input";
import NoteItem from "../components/NoteItem";
import { authOptions } from "./api/auth/[...nextauth]";
import { trpc } from "../utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <Head>
        <title>Notelist</title>
        <meta
          name="description"
          content="Created using Nextjs, Typescript, Tailwindcss, Prisma, Nextauth, Planetscale and Vercel"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Header />
        <Input />
        <div className="p-6 grid justify-items-center gap-4 auto-cols-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <p>{hello.data.greeting}</p>
          <NoteItem />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/landing",
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
