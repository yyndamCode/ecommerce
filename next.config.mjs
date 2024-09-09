/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,

  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
  },
  redirects: async () => {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
