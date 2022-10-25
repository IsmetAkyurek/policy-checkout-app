import Button from ".";
import { render, screen } from "@testing-library/react";

describe(`Core Component : ${Button.name}`, () => {
  it("should render children", () => {
    render(
      <Button>
        <span>Children</span>
      </Button>
    );

    const childrenElement = screen.getByText("Children");

    expect(childrenElement).toBeInTheDocument();
  });

  it("should render with className", () => {
    render(<Button className="className">Button</Button>);

    const buttonElement = screen.getByText("Button");

    expect(buttonElement).toHaveClass("className");
  });

  it("should render with variant", () => {
    render(<Button variant="yellow">Button</Button>);

    const buttonElement = screen.getByText("Button");

    expect(buttonElement).toHaveClass("yellow");
  });
});
