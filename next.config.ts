/** @type {import('next').NextConfig} */
const nextConfig = {
  // УДАЛИТЕ ВСЁ внутри, кроме стандартных вещей, если они есть
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
