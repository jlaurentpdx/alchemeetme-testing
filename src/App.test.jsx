import { render, screen } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const image = screen.getByAltText(/alchemy logo/i)
  const banner = screen.getByRole('banner')
  const username = await screen.findByText(/vonta/i)

  expect(image).toBeInTheDocument()
  expect(banner).toHaveStyle('background: var(--grey)')
  expect(username).toBeInTheDocument()
})
