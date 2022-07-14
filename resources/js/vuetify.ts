import 'vuetify/styles' // Global CSS has to be imported
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg";
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    global: { Option: {} },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary:"#A60402",
        "primary-darken-1": "#590209",
        "primary-lighten-1": "#D91828",
        lightDark: "#C96866",
        lightDark2: "#E8747D",
        error: "#CC0000",
        info: "#0099CC",
        success: "#007E33",
        warning: "#FF8800",
        }
      },
    },
  }
})
