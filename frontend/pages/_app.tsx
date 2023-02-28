import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Layout from "../components/Layout/Layout";
import { SessionProvider } from "next-auth/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  // styles: {
  //   global: () => ({
  //     body: {
  //       bg: "#1E1E1E",
  //     },
  //   }),
  // },
  colors: {
    brand: {
      100: "#313131",
      // 200: "#302F34",
      // 300: "#252429",
      // 400: "#18171C",
    },
    background: {
      100: "#1E1E1E",
    },
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}
