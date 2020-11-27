import { Formik, Field } from 'formik'
import React from 'react'
import styled from 'styled-components'

import { Input } from '../../components'

const Form = styled.form`
  max-width: 30rem;
`

const initialValues = {
  email: '',
  name: ''
}

function validate(values) {
  const errors = {}
  return errors
}

function onSubmit() {
  console.log('Submitting...')
}

function renderEmail({ field, form }) {
  return (
    <Input
      autoFocus
      error={form.touched.email && form.errors.email}
      label="Email Address"
      placeholder="name@example.com"
      type="email"
      {...field}
    />
  )
}

function renderName({ field, form }) {
  return (
    <Input
      error={form.touched.name && form.errors.name}
      label="Name"
      placeholder="Enter your name"
      {...field}
    />
  )
}

function renderForm({ handleSubmit, isSubmitting, status }) {
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign up to NAME</h1>
      {status && status.error && <div>{status.error}</div>}
      <Field children={renderEmail} name="email" />
      <Field children={renderName} name="name" />
      <button disabled={isSubmitting} type="submit">
        Sign up
      </button>
    </Form>
  )
}

const Signup = () => (
  <Formik
    children={renderForm}
    initialValues={initialValues}
    onSubmit={onSubmit}
    validate={validate}
    validateOnBlur={false}
  />
)

export default Signup
