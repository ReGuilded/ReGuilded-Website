import {
  VStack,
  Divider,
  HStack,
  Box,
  Flex,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";

export default function PageNotFound() {
  return (
    <>
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
          Ah, we&apos;re sorry! The page you&apos;re looking for either has been
          moved, or doesn&apos;t exist!
        </Text>
        <Button
          leftIcon={<IoChevronBack />}
          bg="red.400"
          _hover={{ bg: "red.500" }}
          mt="3"
        >
          Go Home
        </Button>
      </Box>
    </>
  );
}
