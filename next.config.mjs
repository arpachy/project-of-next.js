/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //https://res.cloudinary.com/dj493l0jy/image/upload/v1773919153/foods/00dda1e9-bb86-42d3-98f5-8336c6a3dcc1.png
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dj493l0jy/image/upload/**',
        search: '',
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
