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
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import Image from "next/image";

const Links = ["Themes", "Addons", "Contributors", "Support"];

const navItems = [
  {
    name: "Themes",
    href: "//www.guilded.gg/teams/ARmQz4mR/groups/RdK6o7jD/channels/d9b8d0c4-c213-4e65-b82b-c4a81facba79/forums",
  },
  {
    name: "Addons",
    href: "//www.guilded.gg/teams/ARmQz4mR/groups/5d2ZN48d/channels/6ea79916-f450-47a9-af52-224a26ebf9c9/forums",
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
    _hover={{
      bg: "whiteAlpha.200",
    }}
    color={useColorModeValue("gray.900", "gray.200")}
    href={href}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg="rgba(255, 255, 255, 0.05)"
        mx={{ base: 0, lg: 10 }}
        mt={{ base: 0, lg: 10 }}
        rounded={{ base: "0", lg: "3xl" }}
        px={7}
        border="2px solid"
        borderColor="whiteAlpha.200"
        fontFamily="Inter"
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
          <Flex alignItems={"center"} gap={3}>
            <IconButton
              aria-label="Color switch"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              variant="outline"
              rounded="full"
              onClick={toggleColorMode}
            />
            <Button
              bgGradient="linear(to-r, red.400, pink.400)"
              size="sm"
              _hover={{
                bg: "red.500",
                transform: "translateY(-2px)",
                bgGradient: "linear(to-r, red.500, pink.500)",
              }}
              color="gray.50"
              as="a"
              href="/downloads"
            >
              Download
            </Button>
            <Button size="sm" variant="outline" as="a" href="/login">
              Login
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
