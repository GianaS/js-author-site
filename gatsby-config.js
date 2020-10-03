module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.janellesolviletti.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Megrim'
          },
          {
            family: 'Montserrat',
            variants: ['400', '500']
          },
          {
            family: 'Zeyada'
          },
          {
            family: 'Yeseva One'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-remove-trailing-slashes'
    },
    {
      resolve: 'gatsby-plugin-react-helmet'
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `./static/favicon.png`
      },
    }
  ]
}
