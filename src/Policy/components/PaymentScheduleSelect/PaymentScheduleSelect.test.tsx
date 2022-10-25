import PaymentScheduleSelect from ".";
import * as PolicyContext from "Policy/context";
import { render, screen } from "@testing-library/react";
import policyPackageMock from "__mocks__/policyPackageMock";
import usePolicyContextMock from "__mocks__/usePolicyContextMock";

describe(`Policy Component : ${PaymentScheduleSelect.name}`, () => {
  it("should render available schedules when policyPackage is selected", () => {
    const policyPackage = policyPackageMock({
      paymentSchedules: [{ id: 1, name: "Payment Schedule Item", discountMultiplier: 1 }],
    });

    jest.spyOn(PolicyContext, "default").mockImplementation(usePolicyContextMock({ policyPackage }));

    render(<PaymentScheduleSelect />);

    const scheduleElement = screen.getByText(policyPackage.paymentSchedules[0].name);

    expect(scheduleElement).toBeInTheDocument();
  });

  it("should not render when policyPackage is not selected", () => {
    jest.spyOn(PolicyContext, "default").mockImplementation(usePolicyContextMock({}));

    render(<PaymentScheduleSelect />);

    const element = screen.queryByTestId("package-features");

    expect(element).not.toBeInTheDocument();
  });
});
