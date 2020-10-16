import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 62.5%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: ${props => props.theme.color.copy.default};
    font-family: ${props => props.theme.font.family.base};
    font-size: ${props => props.theme.font.size.base};
    font-weight: ${props => props.theme.font.weight.base};
    line-height: ${props => props.theme.font.lineHeight.base};
    text-align: left;
    text-rendering: optimizeLegibility;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    color: inherit;
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  label {
    font-weight: ${props => props.theme.font.weight.bold};
    margin-bottom: 1rem;
  }

  legend {
    font-weight: ${props => props.theme.font.weight.bold};
  }

  code,
  pre {
    font-family: ${props => props.theme.font.family.monospace};
  }

  a {
    color: ${props => props.theme.color.copy.light};
  }
`

export default globalStyle
