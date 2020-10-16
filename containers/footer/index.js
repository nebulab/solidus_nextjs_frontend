import styled from 'styled-components'

import Link from 'next/link'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.color.background.lighter};
  color: ${props => props.theme.color.copy.light};
  font-size: ${props => props.theme.font.size.small};
  padding: 8rem 2rem;
  margin: 4rem 0 0;

  a {
    &:hover {
      color: ${props => props.theme.color.link.hoverGray};
    }
  }
`

const Container = styled.div`
  max-width: ${props => props.theme.sizes.container};
  margin: 0 auto;
  text-align: center;
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <p>
        Powered by <Link href='http://solidus.io/'>Solidus</Link>
      </p>
    </Container>
  </StyledFooter>
)

export default Footer
