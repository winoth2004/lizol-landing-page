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
        name: `lizol-landingpage-gatsby`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GOOGLE_TRACKING_ID, // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: false,
          cookie_expires: 0,
          send_page_view: true
        },
        pluginConfig: {
          head: true,
          respectDNT: false,
          siteSpeedSampleRate: 100,
        },
      },
    },
    /*{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Enables Google Optimize using your container Id
        optimizeId: process.env.GATSBY_GOOGLE_OPTIMIZE_ID,
        // Enables Google Optimize Experiment ID
        experimentId: process.env.GATSBY_GOOGLE_EXPERIMENT_ID,
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "0",
        // Defers execution of google analytics script after page load
        defer: false,
        cookieDomain: process.env.GATSBY_WEB_DOMAIN,
      },
    },*/
  ],
}
