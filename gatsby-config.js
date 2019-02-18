const palette = require('./palette');

module.exports = {
  siteMetadata: {
    title: `@jughosta`,
    description: `Jughosta's personal blog.`,
    author: `@jughosta`,
    theme: {
      maxWidth: 1024,
      accentColor: palette.purple400,
      backgroundColor: palette.bluegrey050,
      cardBackgroundColor: palette.white,
      borderColor: palette.bluegrey100,
      textColor: palette.bluegrey600,
      textColorLight: palette.bluegrey300,
      palette
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jughosta-blog`,
        short_name: `jughosta`,
        start_url: `/`,
        background_color: palette.bluegrey400,
        theme_color: palette.bluegrey400,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
