import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the path as necessary


test('renders the h1 element with the text "School Dashboard"', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { name: /school dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });


test('checks text content in app-body and app-footer', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();
  
    const footerText = screen.getByText(/copyright 2024 - holberton school/i);
    expect(footerText).toBeInTheDocument();
  });  


test('checks if an img element with alt text "holberton logo" is rendered', () => {
    render(<App />);
    const imgElement = screen.getByAltText(/holberton logo/i);
    expect(imgElement).toBeInTheDocument();
  });
