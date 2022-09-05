import React from 'react';
import { render, screen } from '@testing-library/react';
import { IndexPage } from './IndexPage';

test('renders index page title', () => {
  render(<IndexPage />);

  const titleEl = screen.getByText(/Index Page/i);

  expect(titleEl).toBeInTheDocument();
});
