import { AppProps, AppType } from "next/app";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });
import { trpc } from "../utils/trpc";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
};

export default trpc.withTRPC(App);
