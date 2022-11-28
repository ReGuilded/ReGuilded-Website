import Nav from "./Nav";
import { SlideFade, useDisclosure, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { isOpen, onOpen } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, [onOpen]);
  return (
    <>
      <Nav />
      <Box minHeight="100vh">
        <SlideFade offsetY="100px" in={isOpen}>
          {children}
        </SlideFade>
      </Box>
      <Footer />
    </>
  );
}
