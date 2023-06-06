import {
  Divider,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getLocalePath, getLocalePathByLocale } from "../utils/getLocalePath";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function PageNotFound() {
  const { t } = useTranslation(["404", "common"]);
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
      <meta name="og:url" content={`https://reguilded.dev${getLocalePath("/", router)}`} />

      <meta name="twitter:title" content={t("tab.title").toString()} />
      <meta name="twitter:description" content={t("page.metadata.description", { ns: "common"}).toString()} />
      <meta name="twitter:url" content={`https://reguilded.dev${getLocalePath("/", router)}`} />

      {router.locales?.filter((locale) => locale != router.locale).map((locale: string, index: number) => (
          <link key={index} rel="alternate" href={getLocalePathByLocale("/", locale, router)} hrefLang={locale} />
))}
      </Head>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
        flexDirection={{ base: "column", md: "row" }}
        gap={3}
      >
        <Heading color="red.400" fontSize="5xl">
          404
        </Heading>
        <Divider
          display={{ base: "none", md: "block" }}
          height="8rem"
          orientation="vertical"
          mx="5"
        />
        <Text textAlign="center" maxWidth="15rem">
          {t("page.description")}
        </Text>
        <Button
          leftIcon={<IoChevronBack />}
          bg="red.400"
          _hover={{ bg: "red.500" }}
          mt="3"
          as="a"
          href={getLocalePath("/", router)}
        >
          {t("page.homeButton")}
        </Button>
      </Box>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "404"]))
  }
});
