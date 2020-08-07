import styled from 'styled-components'

export default styled.article`
  > section {
    transition: transform .2s;
    > img {
      width: 100%;
    }
  }
  > header {
    text-align: center;
    position: relative;
    h1 {
      font-weight: 600;
      margin: 0;
    }
    a {
      text-decoration: none;
    }
  }
  > section:hover {
    transform: scale(1.1);
  }
`
