import NavigationButtons from ".";
import { render, screen } from "@testing-library/react";

describe(`Policy Component : ${NavigationButtons.name}`, () => {
  it("should render Back button", () => {
    render(<NavigationButtons />);

    const backButtonElement = screen.getByTestId("back-button");

    expect(backButtonElement).toBeInTheDocument();
  });

  it("should render Health Check button", () => {
    render(<NavigationButtons />);

    const healtcheckButtonElement = screen.getByTestId("healtcheck-button");

    expect(healtcheckButtonElement).toBeInTheDocument();
  });
});
