import Head from "next/head";

export default function Home() {
  return (
    <>
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
        <div className="">
          <h1 className="text-xl font-semibold">home</h1>
        </div>
      </main>
    </>
  );
}
