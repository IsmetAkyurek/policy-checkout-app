import WhyUs from ".";
import { render, screen } from "@testing-library/react";

describe(`Policy Component : ${WhyUs.name}`, () => {
  it("should render children", () => {
    render(<WhyUs />);

    const listElement = screen.getByTestId("whyus-list");

    expect(listElement).toBeInTheDocument();
  });
});
