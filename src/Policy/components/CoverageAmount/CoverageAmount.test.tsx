import CoverageAmount from ".";
import * as PolicyContext from "Policy/context";
import { render, screen } from "@testing-library/react";
import policyPackageMock from "__mocks__/policyPackageMock";
import * as StepPriceInput from "Core/components/StepPriceInput";
import usePolicyContextMock from "__mocks__/usePolicyContextMock";

describe(`Policy Component : ${CoverageAmount.name}`, () => {
  it("should render the selector and pass the correct props", () => {
    const childComponent = jest.fn();
    const setCoverageAmount = jest.fn();

    jest.spyOn(PolicyContext, "default").mockImplementation(
      usePolicyContextMock({
        setCoverageAmount,
        coverageAmount: 1,
        policyPackage: policyPackageMock({}),
      })
    );

    jest.spyOn(StepPriceInput, "default").mockImplementation((props) => {
      childComponent(props);
      return <div />;
    });

    render(<CoverageAmount />);

    expect(childComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        value: 1,
        onChange: setCoverageAmount,
      })
    );
  });

  it("should not render when policyPackage is empty", () => {
    jest.spyOn(PolicyContext, "default").mockImplementation(usePolicyContextMock({}));

    render(<CoverageAmount />);

    const element = screen.queryByTestId("coverage-amount");

    expect(element).not.toBeInTheDocument();
  });
});
