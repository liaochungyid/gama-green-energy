// https://wallis.dev/blog/deploying-a-next-js-app-to-github-pages
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/gama-green-energy' : '',
  assetPrefix: isProd ? '/gama-green-energy/' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
