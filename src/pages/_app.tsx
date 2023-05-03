import { AppProps, AppType } from "next/app";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
