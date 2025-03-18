import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
    additionalData: `@use "main.scss" as *;`,
  },
};

export default nextConfig;
