/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://royalwoodpackers.in',
  generateRobotsTxt: true,
  sitemapSize: 5000,           // split if more than 5k URLs
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    // additionalSitemaps: ['https://royalwoodpackers.in/server-sitemap-index.xml'],
  },
};
