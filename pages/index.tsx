import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Divider } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Features />
    </>
  );
}
