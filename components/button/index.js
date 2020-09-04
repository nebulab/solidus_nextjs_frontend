import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  border-radius: 2px;
  border: 0;
  padding: 0 30px;
  height: 40px;
  outline: none;
  cursor: pointer;
  ${(props) => props.type === 'primary' && css`
    color: ${props.theme.color.copy.bright};
    background-color: ${props.theme.color.accent};
  `}
`

const Button = ({ type }) => <StyledButton type={type}>ciao</StyledButton>

Button.defaultProps = {
  type: 'primary'
}

Button.propsTypes = {
  type: PropTypes.string
}

export default Button
