import React from "react";
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
  Badge,
  Grid,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { isIndexSignatureDeclaration } from "typescript";

const people = [
  {
    name: "Atom",
    role: "Web Developer",
    avatar: "https://avatars.githubusercontent.com/u/99760654?v=4",
    github: "atomisadev",
  },
  {
    name: "Atom",
    role: "Web Developer",
    avatar: "https://avatars.githubusercontent.com/u/99760654?v=4",
    github: "atomisadev",
  },
  {
    name: "Atom",
    role: "Web Developer",
    avatar: "https://avatars.githubusercontent.com/u/99760654?v=4",
    github: "atomisadev",
  },
  {
    name: "Atom",
    role: "Web Developer",
    avatar: "https://avatars.githubusercontent.com/u/99760654?v=4",
    github: "atomisadev",
  },
  {
    name: "Atom",
    role: "Web Developer",
    avatar: "https://avatars.githubusercontent.com/u/99760654?v=4",
    github: "atomisadev",
  },
];

export default function Contributors() {
  return (
    <>
      <Box mx={{ base: 5, md: "6rem" }} mt={{ base: "1rem", md: "2rem" }}>
        <Heading>Core</Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          mt={3}
        >
          {people.map((person, index) => (
            <Box
              display="flex"
              key={index}
              as="a"
              href={`//github.com/${person.github}`}
              borderRadius="2xl"
              border="1px solid"
              borderColor="gray.600"
              flexDirection="row"
              gap="4"
              cursor="pointer"
              alignItems="center"
              maxW="20rem"
              _hover={{
                borderColor: "red.400",
                transition: "all 0.3s ease-in-out",
              }}
              p={5}
              mt={4}
            >
              <HStack>
                <Avatar name="Atom" src={person.avatar} />
                <Box display="flex" flexDirection="column">
                  <Text fontSize="1rem" mb="0" fontWeight="bold">
                    {person.name}
                  </Text>
                  <Badge colorScheme="red">{person.role}</Badge>
                </Box>
              </HStack>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
}
