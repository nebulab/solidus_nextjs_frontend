import Button from '.'

let button

describe('Button', () => {
  describe('when is primary', () => {
    beforeEach(() => {
      button = render(<Button type='primary'>Click Me!</Button>)
    })

    it('renders correctly', () => {
      expect(button).toMatchSnapshot()
    })
  })

  describe('when is secondary', () => {
    beforeEach(() => {
      button = render(<Button type='secondary'>Click Me!</Button>)
    })

    it('renders correctly', () => {
      expect(button).toMatchSnapshot()
    })
  })
})
