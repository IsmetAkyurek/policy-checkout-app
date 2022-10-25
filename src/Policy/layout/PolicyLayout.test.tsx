import PolicyLayout from ".";
import { render, screen } from "@testing-library/react";

jest.mock("Policy/components/PackageSelect", () => () => <div>Package Select</div>);
jest.mock("Policy/components/PackageFeatures", () => () => <div>Package Features</div>);
jest.mock("Policy/components/CoverageAmount", () => () => <div>Coverage Amount</div>);
jest.mock("Policy/components/PaymentScheduleSelect", () => () => <div>Payment Schedule Select</div>);
jest.mock("Policy/components/NavigationButtons", () => () => <div>Navigation Buttons</div>);

describe(`Policy Component : ${PolicyLayout.name}`, () => {
  it("should render header element with the logo", () => {
    render(<PolicyLayout />);

    const logoElement = screen.getByAltText("Embea");

    expect(logoElement).toBeInTheDocument();
  });

  it("should render PackageSelect component", () => {
    render(<PolicyLayout />);

    const packageSelectElement = screen.getByText("Package Select");

    expect(packageSelectElement).toBeInTheDocument();
  });

  it("should render PackageFeatures component", () => {
    render(<PolicyLayout />);

    const packageFeaturesElement = screen.getByText("Package Features");

    expect(packageFeaturesElement).toBeInTheDocument();
  });

  it("should render CoverageAmount component", () => {
    render(<PolicyLayout />);

    const coverageAmountElement = screen.getByText("Coverage Amount");

    expect(coverageAmountElement).toBeInTheDocument();
  });

  it("should render PaymentScheduleSelect component", () => {
    render(<PolicyLayout />);

    const paymentScheduleSelectElement = screen.getByText("Payment Schedule Select");

    expect(paymentScheduleSelectElement).toBeInTheDocument();
  });

  it("should render NavigationButtons component", () => {
    render(<PolicyLayout />);

    const navigationButtonsElement = screen.getByText("Navigation Buttons");

    expect(navigationButtonsElement).toBeInTheDocument();
  });
});
