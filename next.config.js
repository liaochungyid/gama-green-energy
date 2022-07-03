// https://wallis.dev/blog/deploying-a-next-js-app-to-github-pages
module.exports = {
  basePath: '/gama-green-energy',
  assetPrefix: '/gama-green-energy/',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
