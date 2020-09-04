import { MockedProvider } from '@apollo/react-testing'

const withApollo = (children, mocks) => (
  <MockedProvider
    mocks={mocks}
    addTypename={false}
    defaultOptions={{
      query: { errorPolicy: 'all' },
      mutate: { errorPolicy: 'all' }
    }}
  >
    {children}
  </MockedProvider>
)

export default withApollo
