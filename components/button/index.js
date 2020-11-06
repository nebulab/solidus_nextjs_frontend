import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  color: ${props => props.theme.color.copy.bright};
  border-radius: 2px;
  padding: 0 30px;
  height: 40px;
  outline: none;
  cursor: pointer;
  ${props =>
    props.type === 'primary' &&
    css`
      background-color: ${props.theme.color.accent};
      border: 0;
    `}
  ${props =>
    props.type === 'secondary' &&
    css`
      background-color: ${props.theme.color.copy.bright};
      color: ${props.theme.color.accent};
      border: 1px solid ${props.theme.color.accent};
    `}
`

const Button = ({ type, children }) => (
  <StyledButton type={type}>{children}</StyledButton>
)

Button.defaultProps = {
  type: 'primary'
}

Button.propTypes = {
  children: PropTypes.shape({}),
  type: PropTypes.string
}

export default Button
