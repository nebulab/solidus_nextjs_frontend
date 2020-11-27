import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  margin: 2rem 0;
  position: relative;
`

const Label = styled.label`
  display: block;
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.6rem;
`

const InputField = styled.input`
  background: #fff;
  border: solid 1px #ccc;
  border-radius: 2px;
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  height: 5rem;
  padding: 0 1.5rem;
  width: 100%;
  &:focus {
    border-color: #aaa;
    outline: none;
  }
`

const Error = styled.p`
  color: red;
  font-size: 1rem;
  margin: 0;
  position: absolute;
  right: 0;
  top: 0.1rem;
`

const Input = ({ error, label, ...rest }) => (
  <Container>
    {label && <Label>{label}</Label>}
    <InputField {...rest} />
    {error && <Error>{error}</Error>}
  </Container>
)

Input.defaultProps = {
  autoFocus: false,
  error: false,
  required: false,
  type: 'text'
}

export default Input
