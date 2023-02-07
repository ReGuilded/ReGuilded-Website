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

export default function Downloads({ release }: any) {
  const router = useRouter();

  return (
    <>
      <Box
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        gap="10"
        justifyContent="center"
        alignItems="center"
        height="70vh"
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
              Download
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
              Download
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
              Download
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.github.com/repos/ReGuilded/ReGuilded-Installer/releases/latest`
  );
  const release = await res.json();
  return {
    props: {
      release,
    },
  };
}
