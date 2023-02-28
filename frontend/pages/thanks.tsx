import {
  Box,
  Icon,
  IconProps,
  useBreakpointValue,
  Heading,
  chakra,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import { getLocalePath, getLocalePathByLocale } from "../utils/getLocalePath";
import { useRouter } from "next/router";

export default function Thanks() {
  const { t } = useTranslation(["thanks", "common"])
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{t("tab.title")}</title>

        <meta name="description" content={t("page.metadata.description", { ns: "common"}).toString()} />
        <meta name="keywords" content={
          t("page.metadata.keywords", { ns: "common", returnObjects: true}).toString()
        } />

        <meta name="og:title" content={t("tab.title").toString()} />
        <meta name="og:description" content={t("page.metadata.description", { ns: "common"}).toString()} />
        <meta name="og:url" content={`https://reguilded.dev${getLocalePath(router.asPath, router)}`} />

        <meta name="twitter:title" content={t("tab.title").toString()} />
        <meta name="twitter:description" content={t("page.metadata.description", { ns: "common"}).toString()} />
        <meta name="twitter:url" content={`https://reguilded.dev${getLocalePath(router.asPath, router)}`} />

        {router.locales?.filter((locale) => locale != router.locale).map((locale: string, index: number) => (
            <link key={index} rel="alternate" href={getLocalePathByLocale(router.asPath, locale, router)} hrefLang={locale} />
        ))}
      </Head>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"
        flexDir="column"
        gap="5"
        fontFamily="Inter"
      >
        <Heading fontSize="6xl" maxW="50rem" textAlign="center">
          <Trans i18nKey="page.header" t={t}>
            Thanks for downloading
            <chakra.span
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
                fontWeight="black"
            >
              ReGuilded
            </chakra.span>
          </Trans>
        </Heading>
        <Text fontSize="xl" color="gray.200">
          {t("page.description")}
        </Text>
        <Button
          as="a"
          href="https://www.guilded.gg/ReGuilded?i=4WaRKznm"
          variant="outline"
        >
          {t("page.joinButton")}
        </Button>
      </Box>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "thanks"]))
  }
});