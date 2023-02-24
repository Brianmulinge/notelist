import { AppProps } from "next/app";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
