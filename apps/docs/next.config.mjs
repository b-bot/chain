import { withContentCollections } from "@content-collections/next";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
};

export default withContentCollections(nextConfig);
