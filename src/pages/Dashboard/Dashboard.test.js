import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

it('renders', () => {
  const { getByText } = render(<Dashboard />);

  expect(getByText(/Dashboard/i)).toBeInTheDocument();
});
