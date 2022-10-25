import SummaryCard from ".";
import { render } from "@testing-library/react";
import * as formatAmount from "Policy/utils/formatAmount";

jest.mock("Policy/context", () => () => ({
  paymentSchedule: { discountMultiplier: 1 },
  policyPackage: { price: 10 },
}));

describe(`Policy Component : ${SummaryCard.name}`, () => {
  it("should render price when policyPackage and paymentSchedule are both selected", () => {
    const formatAmountMock = jest.fn();

    jest.spyOn(formatAmount, "default").mockImplementation(formatAmountMock);

    render(<SummaryCard />);

    expect(formatAmountMock).toBeCalledWith(10);
  });
});
