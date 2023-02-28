import "../styles/globals.css";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Layout from "../components/Layout/Layout";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

<<<<<<< HEAD
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
=======
const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("gray.50", "#151a23")(props),
>>>>>>> 7bad41ecd33c5c04c1a9e9ffcc2d8bda4f19d765
    },
  }),
};

const theme = extendTheme({ ...config, styles });

const App = ({ Component, pageProps: {session, ...pageProps}}: any) => (
    <>
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ChakraProvider>
    </>
)

export default appWithTranslation(App)