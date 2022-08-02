import { render, screen } from '@testing-library/react';
import App from './App';

it('should render with a navbar, a section and a footer', () => {
  const { getByText } = render(<App />);
 // const linkElement = screen.getByText(/learn react/i);
  expect(screen.getByText('navBar')).toBeInTheDocument();
  expect(screen.getByText('content')).toBeInTheDocument();
  expect(screen.getByText('footer')).toBeInTheDocument();
});



