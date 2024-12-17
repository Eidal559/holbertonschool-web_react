import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../task_1/dashboard/src/App';

describe('App Component Tests', () => {
  test('renders the h1 element with text "School dashboard"', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { name: /School dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the 2 paragraph elements with correct text content', () => {
    render(<App />);
    const bodyParagraph = screen.getByText(/Login to access the full dashboard/i);
    const footerParagraph = screen.getByText(/Copyright 2024 - holberton School/i);

    expect(bodyParagraph).toBeInTheDocument();
    expect(footerParagraph).toBeInTheDocument();
  });

  test('renders the image element with correct alt text', () => {
    render(<App />);
    const imageElement = screen.getByAltText(/holberton logo/i);
    expect(imageElement).toBeInTheDocument();
  });
});
