import Footer from '.'

let footer

describe('Footer', () => {
  beforeEach(() => {
    footer = render(<Footer />)
  })

  it('renders correctly', () => {
    expect(footer).toMatchSnapshot()
  })
})
