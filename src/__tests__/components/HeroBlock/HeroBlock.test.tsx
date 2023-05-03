import { render, screen } from '@testing-library/react';
import HeroBLock from '@components/HeroBlock/HeroBlock';

describe('HeroBlock', () => {
  it('should render component', () => {
    render(<HeroBLock />);
    screen.getByText(/Koučingas/);
    screen.getByText(/Sign in to access your account/);
    screen.getByText(/Registruokis!/);
  });
}
);