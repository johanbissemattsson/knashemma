module.exports = {
  siteMetadata: {
    title: 'Knas Hemma',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-catch-links'
  ],
};

/*
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/media/img`,
        name: 'images',
      },
    },
*/