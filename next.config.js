/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        additionalData: `@import "@s/general/_global.scss";`,
    },
    images: {
        domains: ["loremflickr.com"],
    },
};

module.exports = nextConfig;
