import Icon from ".";
import { IconName } from "Core/types/Icon";
import { render, screen } from "@testing-library/react";

describe(`Core Component : ${Icon.name}`, () => {
  it("should render icon given an existing icon name", () => {
    render(<Icon name="arrowLeft" />);

    const iconElement = screen.getByText("arrowLeft.svg");

    expect(iconElement).toBeInTheDocument();
  });

  it("should not render given an unexisting icon name", () => {
    render(<Icon name={"arrowRight" as IconName} />);

    const iconElement = screen.queryByText("arrowRight.svg");

    expect(iconElement).not.toBeInTheDocument();
  });
});
