import { NextRouter } from "next/router";

export function getLocalePath(href: string, router: NextRouter) {
    return getLocalePathByLocale(href, router.locale || "en-US", router);
}

export function getLocalePathByLocale(href: string, locale: string, router: NextRouter) {
    if (href.startsWith("//")) return href;
    if (locale === router.defaultLocale) return href;
    if (href.includes(locale)) href = href.replace(`/${locale}`, "");

    return `/${locale}${href}`
}