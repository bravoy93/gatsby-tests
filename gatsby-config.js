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
    /*Manifest*/
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Unified Health Advisors",
        short_name: "UH Advisors",
        start_url: "/",
        background_color: "#1f497d",
        theme_color: "#1f497d",
        display: "standalone",
        icon: "src/images/icon.svg"
      },
    },    
  ],
}
