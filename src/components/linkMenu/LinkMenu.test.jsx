import { render, fireEvent } from '@testing-library/react'
import { LinkMenu } from './LinkMenu'
import { BrowserRouter } from 'react-router-dom';


it('should render a list of links', () => {
    const { getByText } = render(<BrowserRouter> <LinkMenu links={[
        {
            to: "/test",
            name: "test",
            id: "test"
        },
        {
            to: "/home",
            name: "home",
            id: "home"
        }
    ]} /> </BrowserRouter>)

    const linkEl1 = getByText('test');
    const linkEl2 = getByText('home');

    expect(linkEl1).toBeInTheDocument();
    expect(linkEl2).toBeInTheDocument();


});

it("should change the pathname on link click", () => {
    const { getByText } = render(<BrowserRouter> <LinkMenu links={[
        {
            to: "/test",
            name: "test",
            id: "test"
        },
        {
            to: "/home",
            name: "home",
            id: "home"
        }
    ]} /> </BrowserRouter>)

    const linkEl1 = getByText('test');
    const linkEl2 = getByText('home');

   fireEvent.click(linkEl1);

   expect(window.location.pathname).toBe('/test');

   fireEvent.click(linkEl2);

   expect(window.location.pathname).toBe('/home');
})