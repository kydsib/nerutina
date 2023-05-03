import { render, screen } from "@testing-library/react";
import Footer from "@components/Footer/Footer";

describe("Footer", () => {
  it("should render Footer", () => {
    render(<Footer />);
    screen.getByText(/Asmeninis augimas/);
    screen.getByText(/Copyright © 2023 - Aistė Senkutė/);
    screen.getByText(/Komandos augimas/);
    screen.getByText(/Marketingo Konsultacijos/);
    screen.getByText(/Kontaktai/);
    screen.getByText(/Apie mane/);
    screen.getByText(/Nerutina/);
    screen.getByText(/Paremk podcastą/);
    screen.getByText(/Būsimi renginiai/);
  });

  it.todo('should be possible to navigate to other pages');

  it.todo('social icons should work');
});