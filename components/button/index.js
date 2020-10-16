import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  color: ${props => props.theme.colors.copy.bright};
  border-radius: 2px;
  padding: 0 30px;
  height: 40px;
  outline: none;
  cursor: pointer;
  ${props =>
    props.type === 'primary' &&
    css`
      background-color: ${props.theme.colors.accent};
      border: 0;
    `}
  ${props =>
    props.type === 'secondary' &&
    css`
      background-color: ${props.theme.colors.copy.bright};
      color: ${props.theme.colors.accent};
      border: 1px solid ${props.theme.colors.accent};
    `}
`

const Button = ({ type, children }) => (
  <StyledButton type={type}>{children}</StyledButton>
)

Button.defaultProps = {
  type: 'primary'
}

Button.propsTypes = {
  children: PropTypes.shape({}),
  type: PropTypes.string
}

export default Button
