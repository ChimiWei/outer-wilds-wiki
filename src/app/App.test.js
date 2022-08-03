import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
it('should render with a navbar, a section and a footer', () => {
  const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
 // const linkElement = screen.getByText(/learn react/i);
  expect(screen.getByText('navBar')).toBeInTheDocument();
  expect(screen.getByText('content')).toBeInTheDocument();
  expect(screen.getByText('footer')).toBeInTheDocument();
});



