/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://royalwoodpackers.in',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalPaths: async (config) => {
    const dynamicUrls = [
      'https://www.royalwoodpackers.in/',
      'https://www.royalwoodpackers.in/products',
      'https://www.royalwoodpackers.in/contact',
      'https://www.royalwoodpackers.in/request-rate',
      'https://www.royalwoodpackers.in/products/rubber-wood-pallets',
      'https://www.royalwoodpackers.in/products/wooden-boxes',
      'https://www.royalwoodpackers.in/products/plywood-pallets',
      'https://www.royalwoodpackers.in/get-rates',
      'https://www.royalwoodpackers.in/products/country-wood-pallets',
      'https://www.royalwoodpackers.in/products/painted-wood-pallets',
      'https://www.royalwoodpackers.in/products/pine-wood-pallets',
      'https://www.royalwoodpackers.in/products/plastic-pallets',
      'https://www.royalwoodpackers.in/products/wooden-crates',
      'https://www.royalwoodpackers.in/products/wooden-planks',
      'https://www.royalwoodpackers.in/products/plywood',
      'https://www.royalwoodpackers.in/products/veneer-sheets',
      'https://www.royalwoodpackers.in/products/rented-pallets',
    ];

    return dynamicUrls.map(url => ({
      loc: url,
      lastmod: new Date().toISOString(), // you can customize lastmod if needed
    }));
  },
};
