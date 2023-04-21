import { AppProps, AppType } from "next/app";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        <Analytics />
      </SessionProvider>
    </main>
  );
};

export default trpc.withTRPC(App);
