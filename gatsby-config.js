module.exports = {
  siteMetadata: {
    title: 'Knas Hemma',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/layouts/fonts`,
        name: 'fonts',
      },
    },       
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media/uploads`,
        name: 'images',
      },
    },    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    }, 
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          }  
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-catch-links',
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