import { NextRouter } from "next/router";

export function getLocalePath(href: string, router: NextRouter) {
    if (href.startsWith("//")) return href;
    if (router.locale === router.defaultLocale) return href;

    return `/${router.locale}${href}`
}