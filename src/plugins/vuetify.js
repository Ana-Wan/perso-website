// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: 'eb5e28',
        secondary: '403d39',
        tertiary: 'ccc5b9',
        accent: '252422',
        offwhite: 'fffcf2',
        white: 'FFFFFF',
        error: '#E0707B',
        success: "#85c987",
      },
    },
    options: {
      customProperties: true,
    },
  },
}

export default new Vuetify(opts)