/** @type {import('next-i18next').UserConfig} */

module.exports = {
    i18n: {
        defaultLocale: "en-US",
        locales: ["en-US"],
    },

    localePath: typeof window === "undefined" ? require("path").resolve("./lang") : '/lang'
}