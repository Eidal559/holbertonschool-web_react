import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header component tests', () => {
  let contextValues;
  let wrapper;

  beforeEach(() => {
    // A default context value for each test
    contextValues = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logout: jest.fn(),
    };

    // Render Header in the context provider for each test
    wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <Header />
      </AppContext.Provider>
    )
      // Because shallow won't dive into the context by default:
      .dive({ context: contextValues })
      .dive({ context: contextValues });
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the logo image and h1 tag with "School dashboard"', () => {
    // Example: check for an <h1> tag
    expect(wrapper.find('h1').text()).toContain('School dashboard');

    // If you had an <img> for the logo:
    // expect(wrapper.find('img.header__logo').exists()).toBe(true);
  });

  it('does NOT display the logoutSection if user is not logged in', () => {
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('displays the logoutSection if user IS logged in, with user email', () => {
    // Update context so user is logged in
    contextValues = {
      ...contextValues,
      user: {
        email: 'test@holberton.io',
        password: 'pass',
        isLoggedIn: true,
      },
    };

    // Re-render with updated context
    wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <Header />
      </AppContext.Provider>
    )
      .dive({ context: contextValues })
      .dive({ context: contextValues });

    const logoutSection = wrapper.find('#logoutSection');
    expect(logoutSection.length).toBe(1);
    expect(logoutSection.text()).toContain('test@holberton.io');
  });

  it('calls logout function when clicking the logout link', () => {
    // Simulate the logged-in context
    contextValues = {
      ...contextValues,
      user: {
        email: 'test@holberton.io',
        password: 'pass',
        isLoggedIn: true,
      },
    };

    wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <Header />
      </AppContext.Provider>
    )
      .dive({ context: contextValues })
      .dive({ context: contextValues });

    const logoutSpan = wrapper.find('#logoutSection span');
    // You might have something like onClick={logout} on that <span>
    logoutSpan.simulate('click');
    expect(contextValues.logout).toHaveBeenCalled();
  });
});
