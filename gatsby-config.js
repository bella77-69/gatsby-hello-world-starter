module.exports = {
  plugins: [ `gatsby-plugin-typography`,
              `gatsby-plugin-emotion`,
            {
              resolve: `gatsby-plugin-typography`,
              options: {
                pathToConfigModule: `src/utils/typography`,
              },
            },
          ],
}
