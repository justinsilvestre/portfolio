module.exports = {
  siteMetadata: {
    title: 'Justin Silvestre - Software Developer',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'Roboto:300,400'],
        },
      },
    },
  ],
}
