import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders the selection buttons', () => {
    render(<Home/>)
    expect(screen.getByTestId('form-region')).toBeInTheDocument()
    expect(screen.getByTestId('form-cqcRating')).toBeInTheDocument()
    expect(screen.getByTestId('form-price')).toBeInTheDocument()
    expect(screen.getByTestId('form-name')).toBeInTheDocument()
    expect(screen.getByRole('button', {
      name: /submit/i
    })).toBeInTheDocument()
  })
})