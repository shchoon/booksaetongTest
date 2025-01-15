/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   staleTimes: {
  //     dynamic: 10,
  //   },
  // },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "search1.kakaocdn.net",
      },
      {
        protocol: "https",
        hostname: "search.daum.net",
      },
    ],
  },
};

export default nextConfig;
