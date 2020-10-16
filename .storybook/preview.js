import { MockedProvider } from '@apollo/react-testing'
import { ThemeProvider } from 'styled-components'
import { theme } from '../lib/theme'

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
)

const withApollo = (Story, context) =>
  context.args.mocks ? (
    <MockedProvider
      mocks={context.args.mocks}
      addTypename={false}
      defaultOptions={{
        query: { errorPolicy: 'all' },
        mutate: { errorPolicy: 'all' }
      }}
    >
      <Story {...context} />
    </MockedProvider>
  ) : (
    <Story {...context} />
  )

export const decorators = [withApollo, withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
