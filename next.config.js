/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/ciimo" : "",
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/", // リダイレクト元のURL
        destination: "/schedule", // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
    ];
  },
};

module.exports = nextConfig;
