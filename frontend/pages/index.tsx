import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Layout/Nav";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReGuilded</title>
      </Head>
      <Hero />
      <Box mt={30} mb={"5rem"}>
        <Features />
      </Box>
    </>
  );
}
