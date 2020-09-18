module.exports = {
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
            variants: ['500']
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
      resolve: 'gatsby-plugin-remove-trailing-slashes'
    }
  ]
}
