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
          }
        ]
      }
    }
  ],
}
