import { Story } from "@storybook/react";
import PolicyContext from "../../src/Policy/context/context";

const PolicyDecorator = (Story: Story) => {
  return (
    <PolicyContext.Provider
      value={{
        setCoverageAmount: () => {},
        setPaymentSchedule: () => {},
        setPolicyPackage: () => {},
        coverageAmount: 6000,
        paymentSchedule: { discountMultiplier: 0.825, id: 1, name: "Monthly" },
        policyPackage: {
          id: 1,
          price: 10,
          name: "Policy Package",
          coverage: { min: 5000, step: 1000 },
          features: ["Feature 1", "Feature 2"],
          description: "Policy Package Description",
          paymentSchedules: [
            { id: 1, discountMultiplier: 1, name: "Monthly" },
            { id: 2, discountMultiplier: 0.85, name: "Yearly" },
          ],
        },
      }}
    >
      <Story />
    </PolicyContext.Provider>
  );
};

export default PolicyDecorator;
