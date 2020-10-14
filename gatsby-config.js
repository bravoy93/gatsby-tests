/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Unified Health Advisors`,
    description: `Unified Health's licensed agents can match you with a variety of Medicare coverage options and get you the benefits that you deserve. Take advantage, enroll.`,
    author: `Unified Health`,
    keywords: [`health`, `health insurance plans`, `health insurance`, `medicare`, `unified health`],
    siteUrl: `https://unifiedhealthadvisors.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /*Manifest*/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Unified Health Advisors",
        short_name: "UH Advisors",
        start_url: "/",
        background_color: "#1f497d",
        theme_color: "#1f497d",
        display: "standalone",
        icon: "src/images/icon.svg",
        icons: [
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: `/icons/icon-192x192-maskable.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`
          },
          {
            src: `/icons/icon-512x512-maskable.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`
          },
        ]
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
  ],
}
