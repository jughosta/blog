const palette = require('./palette');

module.exports = {
  siteMetadata: {
    title: `@jughosta`,
    description: `Jughosta's personal blog.`,
    author: `@jughosta`,
    theme: {
      maxWidth: 1024,
      accentColor: palette.lightbluevivid500,
      backgroundColor: palette.bluegrey050,
      cardBackgroundColor: palette.white,
      borderColor: palette.bluegrey100,
      textColor: palette.bluegrey900,
      textColorLight: palette.bluegrey600,
      boxShadow: `inset 0 0 0 1px ${palette.bluegrey100}, 0 5px 15px -6px rgba(0, 0, 0, 0.1)`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jughosta-blog`,
        short_name: `jughosta`,
        start_url: `/`,
        background_color: palette.lightbluevivid500,
        theme_color: palette.lightbluevivid500,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-33234679-8",
        head: false,
        exclude: [],
        cookieDomain: "blog.jughosta.me"
      },
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: `https://medium.com/feed/@jughosta`,
        name: `Medium`
      }
    }
  ],
};
