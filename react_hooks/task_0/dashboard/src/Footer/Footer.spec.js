import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import { newContext } from '../Context/context';

test('it should rendered without crashing', () => {
  render(<Footer />)

  const footerParagraph = screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`);

  expect(footerParagraph).toHaveTextContent(/copyright 2024 - holberton School/i)
})

test('the link should exists once a user is logged in', () => {
  const mockUserContext = {
    email: 'test@example.com',
    password: 'password123',
    isLoggedIn: true
  }
  
  render(
    <newContext.Provider value={{ user: mockUserContext, logOut: jest.fn() }}>
      <Footer />
    </newContext.Provider>
  );

  const link = screen.getByRole('link', { name: /contact us/i });

  expect(link).toBeInTheDocument()
});

describe('', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateLogin = (email, password) => {
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 8;
    return isValidEmail && isValidPassword;
  };

  test('the link should not exists once a user is logged out', () => {
    const mockUserContext = {
      email: '',
      password: '',
      isLoggedIn: validateLogin('', '')
    }
    
    render(
      <newContext.Provider value={{ user: mockUserContext, logOut: jest.fn() }}>
        <Footer />
      </newContext.Provider>
    );
  
    const link = screen.queryByRole('link', { name: /contact us/i });
    const footerParagraph = screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`);

    expect(footerParagraph).toHaveTextContent(/copyright 2024 - holberton School/i)
    expect(link).not.toBeInTheDocument()
  });
  
  test('the link should not exist when the user email is null', () => {
    const mockUserContext = {
      email: null,
      password: 'password123',
      isLoggedIn: validateLogin(null, 'password123')
    };
    
    render(
      <newContext.Provider value={{ user: mockUserContext, logOut: jest.fn() }}>
        <Footer />
      </newContext.Provider>
    );
  
    const link = screen.queryByRole('link', { name: /contact us/i });
    const footerParagraph = screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`);

    expect(footerParagraph).toHaveTextContent(/copyright 2024 - holberton School/i)
    expect(link).not.toBeInTheDocument();
  });

  test('the link should not exist when the user provides an invalid email', () => {
    const mockUserContext = {
      email: 'invalid-email',
      password: 'password123',
      isLoggedIn: validateLogin('invalid-email', 'password123')
    };
    
    render(
      <newContext.Provider value={{ user: mockUserContext, logOut: jest.fn() }}>
        <Footer />
      </newContext.Provider>
    );

    const link = screen.queryByRole('link', { name: /contact us/i });
    const footerParagraph = screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`);

    expect(footerParagraph).toHaveTextContent(/copyright 2024 - holberton School/i)
    expect(link).not.toBeInTheDocument();
  });

  test('the link should not exist when the user is logged out despite valid credentials', () => {
    const mockUserContext = {
      email: 'test@example.com',
      password: 'password123',
      isLoggedIn: false
    };
    
    render(
      <newContext.Provider value={{ user: mockUserContext, logOut: jest.fn() }}>
        <Footer />
      </newContext.Provider>
    );

    const link = screen.queryByRole('link', { name: /contact us/i });
    const footerParagraph = screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`);

    expect(footerParagraph).toHaveTextContent(/copyright 2024 - holberton School/i)
    expect(link).not.toBeInTheDocument();
  });

  test('the link should exist when the user is logged in but logOut is null', () => {
    const mockUserContext = {
      email: 'test@example.com',
      password: 'password123', 
      isLoggedIn: validateLogin('test@example.com', 'password123')
    };
    
    render(
      <newContext.Provider value={{ user: mockUserContext, logOut: null }}>
        <Footer />
      </newContext.Provider>
    );

    const link = screen.getByRole('link', { name: /contact us/i });
    const footerParagraph = screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`);

    expect(footerParagraph).toHaveTextContent(/copyright 2024 - holberton School/i)
    expect(link).toBeInTheDocument();
  });
})

test('should confirm Footer is a functional component', () => {
  const FooterPrototype = Object.getOwnPropertyNames(Footer.prototype);

  expect(FooterPrototype).toEqual(expect.arrayContaining(["constructor"]))
  expect(FooterPrototype).toHaveLength(1)
  expect(Footer.prototype.__proto__).toEqual({})
});

describe('Should not log errors or warnings to browser console', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateLogin = (email, password) => {
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 8;
    return isValidEmail && isValidPassword;
  };

  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});

  test('No warnings or errors', () => {
    const mockUserContext = {
      email: 'test@example.com',
      password: 'password123', 
      isLoggedIn: validateLogin('test@example.com', 'password123')
    };
    
    render(
      <newContext.Provider value={{ user: mockUserContext, logOut: jest.fn() }}>
        <Footer />
      </newContext.Provider>
    );

    expect(console.error).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
  });
});

describe('Footer tests', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateLogin = (email, password) => {
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 8;
    return isValidEmail && isValidPassword;
  };

  test('No DOM property warnings or errors', () => {
    const mockUserContext = {
      email: 'test@example.com',
      password: 'password123', 
      isLoggedIn: validateLogin('test@example.com', 'password123')
    };
    
    render(
      <newContext.Provider value={{ user: mockUserContext, logOut: jest.fn() }}>
        <Footer />
      </newContext.Provider>
    );

    const link = screen.getByRole('link', { name: /contact us/i });
    const footerParagraph = screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`);

    expect(footerParagraph).toHaveTextContent(/copyright 2024 - holberton School/i)
    expect(link).toBeInTheDocument();

    expect(console.error).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
  });
});
