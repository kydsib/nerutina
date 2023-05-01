import { render, screen } from '@testing-library/react';
import Home from '@app/page';

describe('Home', () => {
  it('should render', () => {
    render(<Home />);
    screen.getByText('Apie')
    screen.findAllByAltText('Podcastas')
    screen.getByText('Registruotis konsultacijai')
  });
}
);
