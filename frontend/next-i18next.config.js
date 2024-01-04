/** @type {import('next-i18next').UserConfig} */

module.exports = {
    i18n: {
        defaultLocale: "en-US",
        locales: ["en-US", "es-ES", "fr-FR", "zh-CN", "de-DE", "hu-HU", "ru-RU"],
    },
    fallbackLng: {
        default: ["en"],
        "es": ["es-ES"],
        "fr": ["fr-FR"],
        "zh": ["zh-CN"],
        "de": ["de-DE"],
        "hu": ["hu-HU"],
        "ru": ["ru-RU"]
    },
    nonExplicitSupportedLngs: true,

    localePath: typeof window === "undefined" ? require("path").resolve("./lang") : "/lang",
    reloadOnPrerender: process.env.NODE_ENV === "development"
}
