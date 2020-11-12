import { render } from '@testing-library/react';
import App from './App';

it('renders hello world', () => {
  const { getByText } = render(<App />);

  expect(getByText(/Hello world!/i)).toBeInTheDocument();
});
