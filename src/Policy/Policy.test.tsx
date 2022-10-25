import Policy from ".";
import { render, screen } from "@testing-library/react";
import { PolicyContextProviderProps } from "./context/provider";

jest.mock("Policy/layout", () => () => <div>Policy Layout</div>);
jest.mock("Policy/context/provider", () => (props: PolicyContextProviderProps) => (
  <div>
    <span>Policy Context</span>
    {props.children}
  </div>
));

describe(`Policy Component : ${Policy.name}`, () => {
  it("should render layout and context components", () => {
    render(<Policy />);

    const contextElement = screen.getByText("Policy Context");
    const layoutElement = screen.getByText("Policy Layout");

    expect(contextElement).toBeInTheDocument();
    expect(layoutElement).toBeInTheDocument();
  });
});
