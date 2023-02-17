import Head from "next/head";

export default function Home() {
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
        <h1 className="text-2xl">Notelist</h1>
      </main>
    </div>
  );
}

