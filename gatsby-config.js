module.exports = {
  siteMetadata: {
    title: `@jughosta`,
    description: `Jughosta's personal blog.`,
    author: `@jughosta`,
    theme: {
      maxWidth: 1024,
      accentColor: '#3490dc',
      textColor: '#22292f',
      textColorLight: '#3d4852'
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
