import { render, screen } from "@testing-library/react";
import Carousel from "@components/Carousel/Carousel";

describe("Carousel", () => {
  const data = [{src: "/someImg", alt: "Photo"}, {src: "/someImg", alt: "Photo1"}, {src: "/someImg", alt: "Photo2"}]
  it("should render", () => {
    render(<Carousel data={data}/>);
    screen.findByAltText("Photo");
    screen.findByAltText("Photo1");
    screen.findByAltText("Photo2");
  });
});