import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  Tooltip,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  useColorModeValue,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaGuilded } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const Blur = (props: IconProps) => {
  return (
      <Icon
          width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
          zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
          height="560px"
          viewBox="0 0 528 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
      >
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
  );
};


export default function Login() {
  const { t } = useTranslation(["login", "common"]);

  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return router.push("/dashboard");
  } else
    return (
      <>
        <Head>
          <title>{t("tab.title")}</title>
        </Head>
        <Box position={"relative"}>
          <Container
            as={SimpleGrid}
            maxW={"7xl"}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}
          >
            <Stack display="flex" justifyContent="center" alignItems="center">
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                fontFamily="Inter"
              >
                <Trans i18nKey="page.header" t={t}>
                  Enter the world of
                  <Text
                      as={"span"}
                      fontWeight="black"
                      bgGradient="linear(to-r, red.400,pink.400)"
                      bgClip="text"
                  >Customization</Text>.
                </Trans>
              </Heading>
            </Stack>
            <Stack
              bg={"gray.50"}
              border="1px solid"
              borderColor="gray.200"
              rounded={"xl"}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}
            >
              <Stack spacing={4}>
                <Heading
                  color={"gray.800"}
                  lineHeight={1.1}
                  fontFamily="Inter"
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  <Trans i18nKey="loginModel.header" t={t}>
                    Join ReGuilded
                    <Text
                        as={"span"}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        bgClip="text"
                    >!</Text>
                  </Trans>
                </Heading>
                <Text
                  color={"gray.500"}
                  fontFamily="Inter"
                  fontSize={{ base: "sm", sm: "md" }}
                >
                  {t("loginModel.description")}
                </Text>
              </Stack>
              <Box as={"form"} mt={10}>
                <Stack spacing={4}>
                  <Tooltip label="Authentication is not supported yet">
                    <Button
                      leftIcon={<FcGoogle />}
                      fontFamily={"Inter"}
                      bg={"gray.200"}
                      color={"gray.800"}
                      disabled
                      _hover={{ bg: "gray.100" }}
                    >
                      {t("loginModel.option.google")}
                    </Button>
                  </Tooltip>
                  <Tooltip label="Authentication is not supported yet">
                    <Button
                      leftIcon={<AiFillGithub />}
                      fontFamily={"Inter"}
                      bg={"gray.900"}
                      color={"gray.100"}
                      disabled
                      _hover={{ bg: "gray.700" }}
                      _focus={{ bg: "gray.800" }}
                      // onClick={() => signIn("github")}
                    >
                      {t("loginModel.option.github")}
                    </Button>
                  </Tooltip>
                  <Tooltip label="Authentication is not supported yet">
                    <Button
                      leftIcon={<FaGuilded />}
                      fontFamily={"Inter"}
                      bg={"yellow.400"}
                      color={"gray.900"}
                      disabled
                      _hover={{ bg: "yellow.500" }}
                      _focus={{ bg: "yellow.500" }}
                    >
                      {t("loginModel.option.guilded")}
                    </Button>
                  </Tooltip>
                </Stack>
              </Box>
              form
            </Stack>
          </Container>

          <Blur
            position={"absolute"}
            top={-10}
            zIndex="-1"
            left={-10}
            style={{ filter: "blur(70px)" }}
          />
        </Box>
      </>
    );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "login"]))
  }
});