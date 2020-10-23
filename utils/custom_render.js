import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'

const providers = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: providers, ...options })

global.render = customRender
