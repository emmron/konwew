module.exports = {
  siteMetadata: {
    title: `Gatsby starter site with Kentico Kontent`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        deliveryClientConfig: {
          projectId: `cb04d832-4ea9-0037-44ec-b7e9c5f3cb87`,
        },
        languageCodenames: [
          `default`,
          `de-DE`,
          `cs-CZ`,
        ]
      }
    }
  ]
};
