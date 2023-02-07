import * as React from "react";
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";
import { MdBolt } from "react-icons/md";
import { FaGuilded } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Container maxW="7xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        gap="5rem"
        justifyContent="center"
      >
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          maxW="480px"
        >
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
            fontFamily="Inter"
          >
            Enhancing Guilded <br />
            <chakra.span
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
              fontWeight="black"
            >
              with ReGuilded
            </chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.1rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
            fontFamily="Inter"
          >
            ReGuilded is a client injector mod that allows you to extend the
            functionality of Guilded&apos;s client by providing theme and add-on
            support.
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap"
          >
            <Button
              bg="red.400"
              bgGradient="linear(to-r, red.400,pink.400)"
              shadow={"0 0 40px #F56565"}
              fontFamily="Inter"
              _hover={{
                bgGradient: "linear(to-r, red.500,pink.500)",
                transform: "translateY(-2px)",
                shadow: "0 0 30px #E53E3E",
              }}
              color="gray.50"
              as="a"
              href="/downloads"
            >
              Download
            </Button>

            <Button
              variant="outline"
              _hover={{ transform: "translateY(-2px)" }}
              fontFamily="Inter"
              leftIcon={<FaGuilded />}
            >
              Support
            </Button>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            objectFit="cover"
            src={`https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&q=80&
            fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80`}
            rounded="md"
            fallback={<Skeleton />}
            alt="Hero image"
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
