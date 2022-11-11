import Nav from "./Nav";
import { SlideFade, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

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
      <SlideFade offsetY="100px" in={isOpen}>
        {children}
      </SlideFade>
    </>
  );
}
