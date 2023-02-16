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

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thanks • ReGuikded</title>
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
          Thanks for downloading{" "}
          <chakra.span
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
            fontWeight="black"
          >
            ReGuilded
          </chakra.span>
        </Heading>
        <Text fontSize="xl" color="gray.200">
          Why don&apos;t you check out our Guilded server!
        </Text>
        <Button
          as="a"
          href="https://www.guilded.gg/ReGuilded?i=4WaRKznm"
          variant="outline"
        >
          Join Guilded
        </Button>
      </Box>
    </>
  );
}
