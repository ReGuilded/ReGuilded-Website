import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Heading,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react";

import { AiFillWindows, AiFillApple } from "react-icons/ai";
import { DiLinux } from "react-icons/di";
import { useRouter } from "next/router";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getLocalePath, getLocalePathByLocale } from "../utils/getLocalePath";

export default function Downloads({ release }: any) {
  const { t } = useTranslation(["downloads", "common"]);
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
        flexDir={{ base: "column", md: "row" }}
        gap="10"
        justifyContent="center"
        alignItems="center"
        height={{ base: "105vh", md: "70vh" }}
      >
        <Card w={"15rem"} bg="gray.800">
          <CardBody
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading fontSize="xl" mb={2} fontFamily="Inter">
              Windows
            </Heading>
            <Icon as={AiFillWindows} h={90} w={90} />
          </CardBody>
          <CardFooter fontFamily="Inter">
            <Button
              w="full"
              onClick={() => {
                router.push(release.assets[0].browser_download_url);
                router.push("/thanks");
              }}
            >
              {t("commonWord.download", { ns: "common" })}
            </Button>
          </CardFooter>
        </Card>

        <Card w={"15rem"} bg="gray.800">
          <CardBody
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading fontSize="xl" mb={2} fontFamily="Inter">
              macOS
            </Heading>
            <Icon as={AiFillApple} h={90} w={90} />
          </CardBody>
          <CardFooter fontFamily="Inter">
            <Button
              w="full"
              as="a"
              href="https://www.guilded.gg/ReGuilded/groups/k3yaNW83/channels/e194cb81-5ea5-4e32-a44d-f5ba816e3cf5/docs/344767"
            >
              {t("commonWord.download", { ns: "common" })}
            </Button>
          </CardFooter>
        </Card>

        <Card w={"15rem"} bg="gray.800">
          <CardBody
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading fontSize="xl" mb={2} fontFamily="Inter">
              Linux
            </Heading>
            <Icon as={DiLinux} h={90} w={90} />
          </CardBody>
          <CardFooter fontFamily="Inter">
            <Button
              w="full"
              as="a"
              href="https://www.guilded.gg/ReGuilded/groups/k3yaNW83/channels/e194cb81-5ea5-4e32-a44d-f5ba816e3cf5/docs/344767"
            >
              {t("commonWord.download", { ns: "common" })}
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  const res = await fetch(
      `https://api.github.com/repos/ReGuilded/ReGuilded-Installer/releases/latest`
  );

  const release = await res.json();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "downloads"])),
      release,
    },
  };
}
