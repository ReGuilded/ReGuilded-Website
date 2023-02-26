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

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("gray.50", "#151a23")(props),
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