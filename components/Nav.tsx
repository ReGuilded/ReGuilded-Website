import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  color,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";

const Links = ["Themes", "Addons", "Contributors", "Support"];

const navItems = [
  {
    name: "Themes",
    href: "/themes",
  },
  {
    name: "Addons",
    href: "/addons",
  },
  {
    name: "Contributors",
    href: "/contributors",
  },
  {
    name: "Support",
    href: "//guilded.gg/reguilded",
  },
];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    textUnderlineOffset="4px"
    _hover={{
      textDecoration: "underline",
    }}
    href={href}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={"gray.800"}
        mx={{ base: 0, lg: 10 }}
        mt={{ base: 0, lg: 10 }}
        rounded={{ base: "0", lg: "3xl" }}
        px={7}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link href="/">
                <Image
                  src="/LogoTransparent.svg"
                  height="30"
                  width="30"
                  alt="Logo"
                />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navItems.map((navItem, index) => (
                <NavLink key={index} href={navItem.href}>
                  {navItem.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={2}>
            <Button
              bgGradient="linear(to-r, red.400, pink.400)"
              size="sm"
              _hover={{
                bg: "red.500",
                transform: "translateY(-2px)",
                bgGradient: "linear(to-r, red.500, pink.500)",
              }}
            >
              Download
            </Button>
            <Button size="sm" variant="outline">
              Sign in
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {navItems.map((navItem, index) => (
                <NavLink key={index} href={navItem.href}>
                  {navItem.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
