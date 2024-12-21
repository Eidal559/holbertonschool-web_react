import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications'; // Adjust the import path if necessary

describe('Notifications Component Tests', () => {
  test('checks the existence of the notifications title', () => {
    render(<Notifications />);
    const title = screen.getByText(/Here is the list of notifications/i); // Case-insensitive match
    expect(title).toBeInTheDocument();
  });

  test('checks the existence of the button element', () => {
    render(<Notifications />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('verifies there are 3 list items rendered as notifications', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('checks if clicking the close button logs the expected message', () => {
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i }); // Match button with text "close"
    fireEvent.click(closeButton);

    expect(consoleLogSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleLogSpy.mockRestore(); // Restore original console.log
  });
});
