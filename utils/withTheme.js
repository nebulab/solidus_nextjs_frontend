import { ThemeProvider } from 'styled-components'
import { theme } from '../lib/theme'

const withTheme = (children) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default withTheme
