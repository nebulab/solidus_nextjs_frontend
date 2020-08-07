import styled, { css } from 'styled-components'

export default styled.nav`
  align-items: center;
  border-top: solid 1px #d8d8d8;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  > ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 2rem 0;
    > li {
      display: flex;
      margin: 0 1rem;
      padding: 0;
      > a {
        font-weight: 500;
        text-decoration: none;
      }
    }
  }
  ${(props) => props.alignRight && css`
    flex-grow: 1;
    justify-content: flex-end;
  `}
`
