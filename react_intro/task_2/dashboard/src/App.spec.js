import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    beforeEach(() => {
        document.body.innerHTML = '';  // Clear the body to ensure no leftover markup from previous tests
        render(<App />);
    });

    test('renders the h1 element with the text "School Dashboard"', () => {
        const headingElement = screen.getByRole('heading', { name: /school dashboard/i });
        expect(headingElement).toBeInTheDocument();
    });

    test('checks text content in app-body and app-footer', () => {
        const bodyText = screen.getByText(/login to access the full dashboard/i);
        expect(bodyText).toBeInTheDocument();

        // Simplified check for the footer text, focusing on part of the text
        const footerText = screen.getByText(/copyright/i);
        expect(footerText).toBeInTheDocument();
    });

    test('checks if an img element with alt text "holberton logo" is rendered', () => {
        const imgElement = screen.getByAltText(/holberton logo/i);
        expect(imgElement).toBeInTheDocument();
    });

    test('renders two input elements', () => {
        const inputElements = screen.getAllByTestId('input-element');
        expect(inputElements.length).toBe(2);
    });

    test('renders two label elements with the text "Email" and "Password"', () => {
        const emailLabel = screen.getByLabelText(/email/i);
        const passwordLabel = screen.getByLabelText(/password/i);
        expect(emailLabel).toBeInTheDocument();
        expect(passwordLabel).toBeInTheDocument();
    });

    test('renders a button with the text "OK"', () => {
        const buttonElement = screen.getByRole('button', { name: /ok/i });
        expect(buttonElement).toBeInTheDocument();
    });
});

