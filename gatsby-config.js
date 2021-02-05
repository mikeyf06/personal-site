const siteConfig = require("./config");

module.exports = {
  siteMetadata: {
    title: `Mike Flores' Personal Site`,
    description: `Personal website for Michael Flores. Software Developer based out of Chicago.`,
    author: siteConfig.author.name,
    contacts: {
      linkedin: siteConfig.author.contacts.linkedin,
      github: siteConfig.author.contacts.github,
      twitter: siteConfig.author.contacts.twitter,
      instagram: siteConfig.author.contacts.instagram,
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/MF-Logo-v1-white-outline.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
