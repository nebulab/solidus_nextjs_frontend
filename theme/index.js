import palette from './palette'

export const theme = {
  sizes: {
    container: '114rem'
  },
  font: {
    size: {
      smaller: '1.3rem',
      small: '1.4rem',
      base: '1.6rem',
      large: '1.8rem'
    },
    weight: {
      base: 300,
      bold: 500,
      bolder: 700
    },
    lineHeight: {
      base: 1.6
    },
    family: {
      base:
        '"Inter", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif',
      monospace:
        '"SFMono-Regular", "SF Mono", "Ubuntu Mono", "Consolas", "DejaVu Sans Mono", "Menlo", monospace'
    }
  },
  color: {
    accent: palette.blue.default,
    copy: {
      default: palette.mineShaft.default,
      light: palette.boulder,
      lighter: palette.dustyGray,
      bright: palette.white
    },
    background: {
      alert: palette.gold,
      dark: palette.shark,
      error: palette.cinnabar,
      success: palette.mountainMeadow,
      light: palette.concrete,
      lighter: palette.athensGray
    },
    border: {
      default: palette.altoDark,
      dark: palette.mineShaft.default,
      medium: palette.alto,
      light: palette.concrete
    },
    link: {
      default: palette.mineShaft.default,
      hoverBlue: palette.blue.default,
      hoverGray: palette.mineShaft.lighter30,
      accent: palette.blue.default,
      accentHover: palette.blue.darken10
    }
  }
}
