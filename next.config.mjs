/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // ALL HOSTS ALLOWED WHILE TESTING, NOT A PERMANENT SOLUTION
        hostname: "**",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
