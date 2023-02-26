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

export default function Thanks() {
  const { t } = useTranslation(["thanks", "common"])

  return (
    <>
      <Head>
        <title>{t("tab.title")}</title>
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