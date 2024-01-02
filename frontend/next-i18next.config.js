/** @type {import('next-i18next').UserConfig} */

module.exports = {
    i18n: {
        defaultLocale: "en-US",
        locales: ["en-US", "es-ES", "fr-FR", "zh-CN"],
        fallbackLng: {
            default: ["en"],
            'es': ["es-ES"],
            'fr': ["fr-FR"],
            'zh': ["zh-CN"]
        },
        nonExplicitSupportedLngs: true
    },

    localePath: typeof window === "undefined" ? require("path").resolve("./lang") : '/lang',
    reloadOnPrerender: process.env.NODE_ENV === 'development'
}
