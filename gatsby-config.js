module.exports = {
  siteMetadata: {
    title: `Lizol Surface Cleaner - Disinfectant Surface Cleaning Solutions | Lizol India`,
    description: `Lizol disinfectant surface and floor cleaners come with a distinctive formulation that kills 99.9% germs & viruses like H1N1 and RSV to keep your home fresh and germ-free. It gives 10 times better cleaning and germ-kill than ordinary phenyls & detergents.`,
    author: `@vinotb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/lysol-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
