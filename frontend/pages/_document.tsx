import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript, extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({ config })

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/LogoTransparent.svg" />

        <meta name="theme-color" content="#F56565" />

        <meta name="og:image" content="https://github.com/ReGuilded/.github/blob/main/assets/logo.png?raw=true" />
        <meta name="og:image:alt" content="ReGuilded Banner Image" />

        <meta name="twitter:image:src" content="https://github.com/ReGuilded/.github/blob/main/assets/logo.png?raw=true" />
        <meta name="twitter:image:alt" content="ReGuilded Banner Image" />
      </Head>
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
