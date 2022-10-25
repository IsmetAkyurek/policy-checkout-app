import App from "./App";
import { render, screen } from "@testing-library/react";

jest.mock("Policy", () => () => <div>Policy</div>);

describe(`Component : ${App.name}`, () => {
  it("should render the app", () => {
    render(<App />);

    const policyElement = screen.getByText("Policy");

    expect(policyElement).toBeInTheDocument();
  });
});
