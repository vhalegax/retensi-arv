import colors from 'vuetify/es5/util/colors'

export default () => {
  return {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.brown.lighten1,
          secondary: colors.brown.lighten4,
          tertiary: colors.brown.lighten3,
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  }
}
