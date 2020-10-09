import { MockedProvider } from '@apollo/react-testing'
import { ThemeProvider } from 'styled-components'

import { createOrder } from '../containers/global/__mocks__'
import { Global } from '../containers'
import { theme } from '../theme'

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
)

const withApollo = (Story, context) => {
  const mocks = [...createOrder, ...(context.args.mocks || [])]

  return (
    <MockedProvider
      mocks={mocks}
      addTypename={false}
      defaultOptions={{
        query: { errorPolicy: 'all' },
        mutate: { errorPolicy: 'all' }
      }}
    >
      <Story {...context} />
    </MockedProvider>
  )
}

const withGlobal = (Story, context) => (
  <Global>
    <Story {...context} />
  </Global>
)

export const decorators = [withGlobal, withApollo, withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
