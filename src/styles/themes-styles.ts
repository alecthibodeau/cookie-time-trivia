/* Variables */
import variables from './_variables';

/* Interfaces */
import Themes from '../interfaces/Themes';

const themesStyles: Themes = {

  placid: {
    appFontFamily: {
      fontFamily: variables.fontPlacid
    },
    header: {
      backgroundColor: variables.colorPlacidBlue
    },
    progressBarOuter: {
      borderColor: variables.colorPlacidBlue
    },
    progressBarInner: {
      backgroundColor: variables.colorPlacidPink
    },
    buttonPrimary: {
      fontFamily: variables.fontPlacid,
      backgroundColor: variables.colorPlacidBlue
    },
    colorShade: variables.colorPlacidBlueDark
  },

  bloom: {
    appFontFamily: {
      fontFamily: variables.fontBloom
    },
    header: {
      backgroundColor: variables.colorBloomMagenta
    },
    progressBarOuter: {
      borderColor: variables.colorBloomMagenta
    },
    progressBarInner: {
      backgroundColor: variables.colorBloomTurquoise
    },
    buttonPrimary: {
      fontFamily: variables.fontBloom,
      backgroundColor: variables.colorBloomMagenta
    },
    colorShade: variables.colorBloomMagentaDark
  },

  citrus: {
    appFontFamily: {
      fontFamily: variables.fontCitrus
    },
    header: {
      backgroundColor: variables.colorCitrusGreen
    },
    progressBarOuter: {
      borderColor: variables.colorCitrusGreen
    },
    progressBarInner: {
      backgroundColor: variables.colorCitrusYellow
    },
    buttonPrimary: {
      fontFamily: variables.fontCitrus,
      backgroundColor: variables.colorCitrusGreen
    },
    colorShade: variables.colorCitrusGreenDark
  }
}

export default themesStyles;
