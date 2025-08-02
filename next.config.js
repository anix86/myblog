const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: isProd ? '/myblog' : '',
  assetPrefix: isProd ? '/myblog/' : '',
}