import styled from 'styled-components'

import Link from 'next/link'

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.background.light};
  color: ${(props) => props.theme.colors.copy.light};
  padding: 8rem 2rem;
  font-size: 1.3rem;
  margin: 4rem 0 0;
`

const Container = styled.div`
  max-width: ${(props) => props.theme.sizes.container};
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
