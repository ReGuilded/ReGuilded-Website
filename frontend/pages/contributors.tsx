import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Text,
  IconButton,
  chakra,
  Stack,
  Badge,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import { getLocalePath, getLocalePathByLocale } from "../utils/getLocalePath";
import { useRouter } from "next/router";

export default function Contributors({ data }: any) {
  const { t, i18n } = useTranslation(["contributors", "common"]);
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
        mx={{ base: 5, md: "6rem", lg: "10rem" }}
        mt={{ base: "1rem", md: "2rem" }}
      >
        <Heading textAlign={{ base: "center", lg: "left" }}>{t("team.title.core")}</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
        >
          {data.coreDevelopers.map((developer: any, index: any) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={developer.profilePicture}
                alt={developer.name}
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{developer.name}</Heading>

                  {developer.bio && <Text py="2">{developer.bio}</Text>}

                  <Box display="flex" mt={2} gap={2}>
                    {developer.titles.map((title: any, index: any) => (
                      <Badge key={index} colorScheme="red">
                        {i18n.exists(`member.title.${title}`, { ns: "contributors"}) ? t(`member.title.${title}`) : title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub />}
                      as="a"
                      href={`https://github.com/${developer.github}`}
                    >
                      GitHub
                    </Button>
                  ) : (
                    <></>
                  )}
                  {developer.twitter ? (
                    <Button
                      leftIcon={<BsTwitter />}
                      as="a"
                      href={`https://twitter.com/${developer.twitter}`}
                    >
                      Twitter
                    </Button>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Grid>
        <Heading mt={10} textAlign={{ base: "center", lg: "left" }}>{t("commonWord.contributors", {ns: "common"})}</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
        >
          {data.contributors.map((developer: any, index: any) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={developer.profilePicture}
                alt={developer.name}
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{developer.name}</Heading>

                  {developer.bio && <Text py="2">{developer.bio}</Text>}

                  <Box display="flex" mt={2} gap={2}>
                    {developer.titles.map((title: any, index: any) => (
                      <Badge key={index} colorScheme="red">
                          {i18n.exists(`member.title.${title}`, { ns: "contributors"}) ? t(`member.title.${title}`) : title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub />}
                      as="a"
                      href={`https://github.com/${developer.github}`}
                    >
                      GitHub
                    </Button>
                  ) : (
                    <></>
                  )}
                  {developer.twitter ? (
                    <Button
                      leftIcon={<BsTwitter />}
                      as="a"
                      href={`https://twitter.com/${developer.twitter}`}
                    >
                      Twitter
                    </Button>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Grid>
        <Heading mt={10} textAlign={{ base: "center", lg: "left" }}>{t("team.title.socialMedia")}</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
        >
          {data.socialMediaManagers.map((developer: any, index: any) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={developer.profilePicture}
                alt={developer.name}
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{developer.name}</Heading>

                  {developer.bio && <Text py="2">{developer.bio}</Text>}

                  <Box display="flex" mt={2} gap={2}>
                    {developer.titles.map((title: any, index: any) => (
                      <Badge key={index} colorScheme="red">
                          {i18n.exists(`member.title.${title}`, { ns: "contributors"}) ? t(`member.title.${title}`) : title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub />}
                      as="a"
                      href={`https://github.com/${developer.github}`}
                    >
                      GitHub
                    </Button>
                  ) : (
                    <></>
                  )}
                  {developer.twitter ? (
                    <Button
                      leftIcon={<BsTwitter />}
                      as="a"
                      href={`https://twitter.com/${developer.twitter}`}
                    >
                      Twitter
                    </Button>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Grid>
        <Heading mt={10} textAlign={{ base: "center", lg: "left" }}>{t("team.title.translators")}</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
          mb={10}
        >
          {data.translators.map((developer: any, index: any) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={developer.profilePicture}
                alt={developer.name}
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{developer.name}</Heading>

                  {developer.bio && <Text py="2">{developer.bio}</Text>}

                  <Box display="flex" mt={2} gap={2}>
                    {developer.titles.map((title: any, index: any) => (
                      <Badge key={index} colorScheme="red">
                        {title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub />}
                      as="a"
                      href={`https://github.com/${developer.github}`}
                    >
                      GitHub
                    </Button>
                  ) : (
                    <></>
                  )}
                  {developer.twitter ? (
                    <Button
                      leftIcon={<BsTwitter />}
                      as="a"
                      href={`https://twitter.com/${developer.github}`}
                    >
                      Twitter
                    </Button>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Grid>

        <Text
          mb={10}
          fontSize="2xl"
          maxW={"27rem"}
          fontFamily="Inter"
          color="gray.300"
        >
          <Trans i18nKey="page.specialThanks" t={t}>
            Special thanks to the
            <chakra.span fontWeight="bold">Guilded team</chakra.span> for allowing
            this project to exist 💖
          </Trans>
        </Text>
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  const res = await fetch("https://api.reguilded.dev/team", {
    headers: {
      Authorization: process.env.AUTH_TOKEN_PUBLIC!,
    },
  });

  const data = await res.json();

  return {
    props: {
        ...(await serverSideTranslations(locale, ["common", "contributors"])),
        data,
    },
  };
}
