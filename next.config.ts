// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // <--- 核心修改：开启静态导出
  images: {
    unoptimized: true, // <--- 核心修改：静态模式下无法使用服务器优化，必须关闭
  },
};

export default nextConfig;