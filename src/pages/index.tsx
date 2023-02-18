import Head from "next/head";
import Header from "../components/Header";
import Input from "../components/Input";
import NoteItem from "../components/NoteItem";

export default function Home() {
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
        <div className="p-12 grid justify-items-center gap-4 auto-cols-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <NoteItem />
        </div>
      </main>
    </div>
  );
}
