import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Layout from "../components/Layout";

const config: ThemeConfig = {
  initialColorMode: "dark", // light mode not officially supported (switching is possible, just not officially supported)
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("gray.50", "#151a23")(props),
    },
  }),
};

const theme = extendTheme({ ...config, styles });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
