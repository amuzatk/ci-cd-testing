import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import App from './App'

test('renders Hello World paragraph', () => {
  render(<App />)
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
})
