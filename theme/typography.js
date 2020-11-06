import { css } from 'styled-components'

export default css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: inherit;
    font-weight: ${(props) => props.theme.font.weight.base};
    line-height: 1.1;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  h1 {
    font-size: ${(props) => props.theme.font.size.base * 1.5};
  }

  h2 {
    font-size: ${(props) => props.theme.font.size.base * 1.325};
  }

  h3 {
    font-size: ${(props) => props.theme.font.size.base * 1.225};
  }

  h4 {
    font-size: ${(props) => props.theme.font.size.base * 1.125};
  }

  h5 {
    font-size: ${(props) => props.theme.font.size.base * 1};
  }

  h6 {
    font-size: ${(props) => props.theme.font.size.base - 0.1};
  }

  p {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  a {
    color: ${(props) => props.theme.color.link.default};
    font-weight: ${(props) => props.theme.font.weight.bold};
    text-decoration: none;
    transition: all ease 0.2s;

    &:hover {
      color: ${(props) => props.theme.color.link.hover};
    }
  }
`
