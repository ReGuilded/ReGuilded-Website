import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Select,
} from "@chakra-ui/react";
import { IoLanguageOutline } from "react-icons/io5";
import { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import placeholder from "lodash/fp/placeholder";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  const router = useRouter();
  const oppositeBgColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box
      color={oppositeBgColor}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box display="flex" alignItems="center" gap="2">
          <Image src="/LogoTransparent.svg" height="30" width="30" alt="Logo" />
          <Text
            bgGradient={"linear(to-r, red.400,pink.400)"}
            bgClip={"text"}
            fontWeight="bold"
            fontSize="2xl"
          >
            ReGuilded
          </Text>
        </Box>

        <Box>
          <Text fontFamily="Inter" fontSize="sm">© 2021-{new Date().getFullYear()} ReGuilded. All rights reserved</Text>
          <Text fontFamily="Inter" color="gray.400" fontSize="xs">ReGuilded is not affiliated or endorsed by Guilded, Inc.</Text>
        </Box>
      </Container>
    </Box>
  );
}
