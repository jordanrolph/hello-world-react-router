import { render } from '@testing-library/react';
import Home from './Home';

it('renders', () => {
  const { getByText } = render(<Home />);

  expect(getByText(/Home/i)).toBeInTheDocument();
});
