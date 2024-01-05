import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Grid,
  Heading,
  Image,
  Stack,
  chakra,
  Text,
  Container,
  useColorModeValue, Link,
} from "@chakra-ui/react";
import React from "react";
import {FaGithub} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import Head from "next/head";
import {Trans, useTranslation} from "next-i18next";
import {getLocalePath, getLocalePathByLocale} from "../utils/getLocalePath";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Contributors({data}: any) {
  const {t, i18n} = useTranslation(["contributors", "common"]);
  const router = useRouter();
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const oppositeBgColor = useColorModeValue("gray.800", "gray.100");

  return (
    <>
      <Head>
        <title>{t("tab.title")}</title>

        <meta name="description" content={t("page.metadata.description", {ns: "common"}).toString()}/>
        <meta name="keywords" content={
          t("page.metadata.keywords", {ns: "common", returnObjects: true}).toString()
        }/>

        <meta name="og:title" content={t("tab.title").toString()}/>
        <meta name="og:description" content={t("page.metadata.description", {ns: "common"}).toString()}/>
        <meta name="og:url" content={`https://reguilded.dev${getLocalePath(router.asPath, router)}`}/>

        <meta name="twitter:title" content={t("tab.title").toString()}/>
        <meta name="twitter:description" content={t("page.metadata.description", {ns: "common"}).toString()}/>
        <meta name="twitter:url" content={`https://reguilded.dev${getLocalePath(router.asPath, router)}`}/>

        {router.locales?.filter((locale) => locale != router.locale).map((locale: string, index: number) => (
          <link key={index} rel="alternate" href={getLocalePathByLocale(router.asPath, locale, router)}
                hrefLang={locale}/>
        ))}
      </Head>
      <Box
        mx={{base: 5, md: "6rem", lg: "10rem"}}
        mt={{base: "1rem", md: "2rem"}}
      >

        <Heading textAlign={{base: "center", lg: "left"}}>{t("team.title.core")}</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
        >
          {data.reguildedTeam.coreDevelopers.map((developer: any, index: any) => (
            <Card
              direction={{base: "column", sm: "row"}}
              overflow="hidden"
              variant="elevated"
              key={index}
              bgColor={bgColor}
            >
              <Image
                objectFit="cover"
                maxW={{base: "100%", sm: "200px"}}
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
                        {i18n.exists(`member.title.${title}`, {ns: "contributors"}) ? t(`member.title.${title}`) : title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub/>}
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
                      leftIcon={<BsTwitter/>}
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

        <Heading mt={10}
                 textAlign={{base: "center", lg: "left"}}>{t("commonWord.contributors", {ns: "common"})}</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
        >
          {data.reguildedTeam.contributors.map((developer: any, index: any) => (
            <Card
              direction={{base: "column", sm: "row"}}
              overflow="hidden"
              variant="elevated"
              key={index}
              bgColor={bgColor}
            >
              <Image
                objectFit="cover"
                maxW={{base: "100%", sm: "200px"}}
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
                        {i18n.exists(`member.title.${title}`, {ns: "contributors"}) ? t(`member.title.${title}`) : title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub/>}
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
                      leftIcon={<BsTwitter/>}
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

        <Heading mt={10} textAlign={{base: "center", lg: "left"}}>{t("team.title.socialMedia")}</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
        >
          {data.reguildedTeam.socialMediaManagers.map((developer: any, index: any) => (
            <Card
              direction={{base: "column", sm: "row"}}
              overflow="hidden"
              variant="elevated"
              key={index}
              bgColor={bgColor}
            >
              <Image
                objectFit="cover"
                maxW={{base: "100%", sm: "200px"}}
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
                        {i18n.exists(`member.title.${title}`, {ns: "contributors"}) ? t(`member.title.${title}`) : title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub/>}
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
                      leftIcon={<BsTwitter/>}
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

        <Heading mt={10} textAlign={{base: "center", lg: "left"}}>{t("team.title.translators")}</Heading>
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
          {data.reguildedTeam.translators.map((developer: any, index: any) => (
            <Card
              direction={{base: "column", sm: "row"}}
              overflow="hidden"
              variant="elevated"
              key={index}
              bgColor={bgColor}
            >
              <Image
                objectFit="cover"
                maxW={{base: "100%", sm: "200px"}}
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
                      leftIcon={<FaGithub/>}
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
                      leftIcon={<BsTwitter/>}
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

        <Heading mt={10} textAlign={{base: "center", lg: "left"}}>Our Supporters</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          mt={3}
          gap={3}
          mb={10}
        >
          {data.guildedSubscribers.gold.map((subscriber: any, index: any) => (
            <Card
              direction={{base: "column", sm: "row"}}
              overflow="hidden"
              variant="elevated"
              key={index}
              bgColor={bgColor}
            >

              <Stack>
                <CardBody>
                  <Heading size="md">{subscriber.userName}</Heading>

                  <Box display="flex" mt={2} gap={2}>
                    <Text
                      fontFamily={'Inter'}
                      bgGradient={`linear(to-r, ${oppositeBgColor}, #F5C400)`}
                      bgClip={'text'}
                      fontSize={'lg'}
                      fontWeight={'bold'}
                    >
                      Gold Subscriber
                    </Text>
                  </Box>
                </CardBody>
              </Stack>
            </Card>
          ))}
          {data.guildedSubscribers.silver.map((subscriber: any, index: any) => (
            <Card
              direction={{base: "column", sm: "row"}}
              overflow="hidden"
              variant="elevated"
              key={index}
              bgColor={bgColor}
            >

              <Stack>
                <CardBody>
                  <Heading size="md">{subscriber.userName}</Heading>

                  <Box display="flex" mt={2} gap={2}>
                    <Text
                      fontFamily={'Inter'}
                      bgGradient={`linear(to-r, ${oppositeBgColor}, #B2B2B2)`}
                      bgClip={'text'}
                      fontSize={'lg'}
                      fontWeight={'bold'}
                    >
                      Silver Subscriber
                    </Text>
                  </Box>
                </CardBody>
              </Stack>
            </Card>
          ))}
          {data.guildedSubscribers.copper.map((subscriber: any, index: any) => (
            <Card
              direction={{base: "column", sm: "row"}}
              overflow="hidden"
              variant="elevated"
              key={index}
              bgColor={bgColor}
            >

              <Stack>
                <CardBody>
                  <Heading size="md">{subscriber.userName}</Heading>

                  <Box display="flex" mt={2} gap={2}>
                    <Text
                      fontFamily={'Inter'}
                      bgGradient={`linear(to-r, ${oppositeBgColor}, #FF9F68)`}
                      bgClip={'text'}
                      fontSize={'lg'}
                      fontWeight={'bold'}
                    >
                      Copper Subscriber
                    </Text>
                  </Box>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </Grid>


        <Box
          color={oppositeBgColor}
        >
          <Container
            as={Stack}
            maxW={"100%"}
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text
              mb={10}
              fontSize="2xl"
              maxW={"27rem"}
              fontFamily="Inter"
              fontWeight={'bold'}
              color={oppositeBgColor}
            >
              <Trans i18nKey="page.specialThanks" t={t}>
                Special thanks to the
                <chakra.span fontWeight="extrabold">Guilded team</chakra.span> for allowing
                this project to exist 💖
              </Trans>
            </Text>

            <Text
              mb={10}
              fontSize="2xl"
              noOfLines={2}
              fontFamily="Inter"
              fontWeight={'bold'}
              color={oppositeBgColor}
            >
              <Trans i18nKey="page.support-contribute" t={t}>
                Like what we do? Please consider<br/>
                <Link bgGradient={"linear(to-r, red.400,pink.400)"} bgClip={"text"}
                      href="https://github.com/reguilded" fontWeight={"extrabold"}
                      _hover={{
                        bgGradient: "linear(to-r, red.500,pink.500)",
                        transform: "translateY(-2px)",
                        textStyle: "underline"
                      }}
                >
                  contributing
                </Link> or&nbsp;
                <Link bgGradient={"linear(to-r, red.400,pink.400)"} bgClip={"text"}
                      href="https://guilded.gg/reguilded/subscriptions" fontWeight={"extrabold"}
                      _hover={{
                        bgGradient: "linear(to-r, red.500,pink.500)",
                        transform: "translateY(-2px)",
                        textStyle: "underline"
                      }}
                >
                  supporting
                </Link>&nbsp;us!
              </Trans>
            </Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}

type GuildedMember = {
  user: {
    id: string,
    type: string,
    name: string
  },
  roleIds: number[]
}

export async function getStaticProps({locale}: any) {
  const res = await fetch((process.env.NODE_ENV == "development" ? "http://localhost:3001/team" : "https://api.reguilded.dev/team"), {
    headers: {
      Authorization: process.env.AUTH_TOKEN_PUBLIC!,
    },
  });

  const guildedSubscribers = {
    gold: [],
    silver: [],
    copper: []
  }

  await fetch("https://www.guilded.gg/api/v1/servers/ARmQz4mR/members", {
    headers: {
      Authorization: `Bearer ${process.env.GUILDED_AUTH_TOKEN}`
    }
  }).then(
    response => response.json(),
    e => console.warn("Failed to fetch Guilded Subscribers")
  ).then(json => {
    guildedSubscribers.gold = json.members.filter((member: GuildedMember) =>
      member.roleIds.includes(28956691)).map((member: GuildedMember) => ({
      userId: member.user.id,
      userName: member.user.name
    }));
    guildedSubscribers.silver = json.members.filter((member: GuildedMember) =>
      member.roleIds.includes(28956690)).map((member: GuildedMember) => ({
      userId: member.user.id,
      userName: member.user.name
    }));
    guildedSubscribers.copper = json.members.filter((member: GuildedMember) =>
      member.roleIds.includes(28956689)).map((member: GuildedMember) => ({
      userId: member.user.id,
      userName: member.user.name
    }));
  });

  const data = {reguildedTeam: await res.json(), guildedSubscribers: guildedSubscribers}

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contributors"])),
      data,
    },
  };
}
