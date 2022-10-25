import Card from ".";
import { render, screen } from "@testing-library/react";

describe(`Core Component : ${Card.name}`, () => {
  it("should render children", () => {
    render(
      <Card>
        <span>Children</span>
      </Card>
    );

    const childrenElement = screen.getByText("Children");

    expect(childrenElement).toBeInTheDocument();
  });

  it("should render with className", () => {
    render(<Card className="className">Card</Card>);

    const cardElement = screen.getByText("Card");

    expect(cardElement).toHaveClass("className");
  });

  it("should render with variant", () => {
    render(<Card variant="primary">Card</Card>);

    const buttonElement = screen.getByText("Card");

    expect(buttonElement).toHaveClass("primary");
  });
});
