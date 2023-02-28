import Head from "next/head";
import { Divider } from "@chakra-ui/react";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getLocalePath, getLocalePathByLocale } from "../utils/getLocalePath";

export default function Home() {
  const { t } = useTranslation(["index", "common"]);
  const router = useRouter();

    return (
    <>
      <Head>
        <title>{t("tab.title")}</title>

        <meta name="description" content={t("page.metadata.description", { ns: "common"}).toString()} />
        <meta name="keywords" content={
          t("page.metadata.keywords", { ns: "common", returnObjects: true}).toString()
        } />

        <meta name="og:title" content={t("tab.title").toString()} />
        <meta name="og:description" content={t("page.metadata.description", { ns: "common"}).toString()} />
        <meta name="og:url" content={`https://reguilded.dev${getLocalePath(router.asPath, router)}`} />

        <meta name="twitter:title" content={t("tab.title").toString()} />
        <meta name="twitter:description" content={t("page.metadata.description", { ns: "common"}).toString()} />
        <meta name="twitter:url" content={`https://reguilded.dev${getLocalePath(router.asPath, router)}`} />

        {router.locales?.filter((locale) => locale != router.locale).map((locale: string, index: number) => (
            <link key={index} rel="alternate" href={getLocalePathByLocale(router.asPath, locale, router)} hrefLang={locale} />
        ))}
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