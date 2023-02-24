import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Divider } from "@chakra-ui/react";
import Nav from "../components/Layout/Nav";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReGuilded</title>
      </Head>
      <Hero />
      <Divider />
      <Features />
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"]))
    }
});