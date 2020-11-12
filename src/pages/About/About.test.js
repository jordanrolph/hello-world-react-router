import { render } from '@testing-library/react';
import About from './About';

it('renders', () => {
  const { getByText } = render(<About />);

  expect(getByText(/About/i)).toBeInTheDocument();
});
