/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Heuristics`,
    siteUrl: `https://www.heuristics.info`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Red Hat Display\:400,700` // Specify the font and weights you need
        ],
        display: 'swap'
      }
    },
  ]
};