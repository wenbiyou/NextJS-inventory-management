import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 新增这一行，强制指定项目根目录
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
