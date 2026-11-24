import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders nexora brand', () => {
  const { getAllByText } = render(<App />);
  expect(getAllByText(/Nexora/i).length).toBeGreaterThan(0);
});
