import Head from "next/head";
import { Divider } from "@chakra-ui/react";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("index");

  return (
    <>
      <Head>
        <title>{t("tab.title")}</title>
      </Head>
      <Hero />
      <Divider />
      <Features />
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common", "index"]))
    }
});