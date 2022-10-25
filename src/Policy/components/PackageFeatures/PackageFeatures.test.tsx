import PackageFeatures from ".";
import * as PolicyContext from "Policy/context";
import { render, screen } from "@testing-library/react";
import policyPackageMock from "__mocks__/policyPackageMock";
import usePolicyContextMock from "__mocks__/usePolicyContextMock";

describe(`Policy Component : ${PackageFeatures.name}`, () => {
  it("should render package features when policyPackage is not empty", () => {
    jest.spyOn(PolicyContext, "default").mockImplementation(
      usePolicyContextMock({
        policyPackage: policyPackageMock({ features: ["Feature"] }),
      })
    );

    render(<PackageFeatures />);

    const featureElement = screen.getByText("Feature");

    expect(featureElement).toBeInTheDocument();
  });

  it("should not render when policyPackage is empty", () => {
    jest.spyOn(PolicyContext, "default").mockImplementation(usePolicyContextMock({}));

    render(<PackageFeatures />);

    const element = screen.queryByTestId("package-features");

    expect(element).not.toBeInTheDocument();
  });
});
