import { css } from 'styled-components'

const interFontPath = '/fonts/inter/'

export default css`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('${interFontPath}Inter-Light.woff2?v=3.15') format('woff2'),
      url('${interFontPath}Inter-Light.woff?v=3.15') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url('${interFontPath}Inter-LightItalic.woff2?v=3.15') format('woff2'),
      url('${interFontPath}Inter-LightItalic.woff?v=3.15') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('${interFontPath}Inter-Medium.woff2?v=3.15') format('woff2'),
      url('${interFontPath}Inter-Medium.woff?v=3.15') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url('${interFontPath}Inter-MediumItalic.woff2?v=3.15') format('woff2'),
      url('${interFontPath}Inter-MediumItalic.woff?v=3.15') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${interFontPath}Inter-Bold.woff2?v=3.15') format('woff2'),
      url('${interFontPath}Inter-Bold.woff?v=3.15') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('${interFontPath}Inter-BoldItalic.woff2?v=3.15') format('woff2'),
      url('${interFontPath}Inter-BoldItalic.woff?v=3.15') format('woff');
  }
`
