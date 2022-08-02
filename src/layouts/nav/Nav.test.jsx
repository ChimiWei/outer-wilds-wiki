import { render, screen } from '@testing-library/react'
import { Nav } from './Nav'


it('should render a img and a link', () => {
    const { getByRole, getByText } = render(<Nav />)
    const logo = getByRole('img')
    const linkEl = getByText('navBar')

    expect(linkEl).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
})