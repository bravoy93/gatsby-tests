/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Unified Health Advisors`,
    description: `Healthcare, not just insurance. Find the Right Healthcare Solutions`,
    author: `Unified Health`,
    keywords: [`healthcare`,`health`,`medical`,`unified`, `unified health`],
    siteUrl: `https://www.unifiedhealthadvisors.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /*Fonts*/
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:300,400,400i,500i,900']
        }
      }
    },
    /*Facebook Pixel*/
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: 225246031877134,
      },
    },
    /*Google Analitycs with gtag*/
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-144175240-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      }
    },
    /*Hotjar*/
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 1920090,
        sv: 6,
      },
    },
  ],
}
