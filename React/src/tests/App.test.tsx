import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders welcoming link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nice to see you here, welcome!/i);
  expect(linkElement).toBeInTheDocument();
});
