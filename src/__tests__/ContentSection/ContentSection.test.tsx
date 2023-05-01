import { render, screen } from "@testing-library/react";
import ContentSection from "@components/ContentSection/ContentSection";

describe("ContentSection", () => {
  it("should render", () => {
    render(<ContentSection  
      title="About me" 
      firstParagraph="Some info about my experience"
      secondParagraph="More achievements" 
      image="/someImg"
      imgAlt="Photo"/>);
    screen.findByText("About me");
    screen.getByText("Some info about my experience");
    screen.getByText("More achievements");
    screen.findByAltText("Photo");
  });
});