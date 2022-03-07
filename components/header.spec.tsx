import { render, screen } from '@testing-library/react'
import { Header } from './header'

it('should render heading', () => {
  render(<Header />)
  expect(screen.getByText('Header')).toBeInTheDocument()
})
