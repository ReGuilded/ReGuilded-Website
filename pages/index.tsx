import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Divider } from "@chakra-ui/react";
import Nav from "../components/Layout/Nav";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Features />
    </>
  );s
}
