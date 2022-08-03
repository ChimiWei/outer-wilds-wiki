import { render } from '@testing-library/react'
import { Nav } from './Nav'
import { BrowserRouter } from 'react-router-dom'


it('should render a img and a link', () => {
    const { getByRole, getByText } = render(<BrowserRouter><Nav /></BrowserRouter>)
    const logo = getByRole('img')
    const linkEl = getByText('The Eye')

    expect(linkEl).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
})