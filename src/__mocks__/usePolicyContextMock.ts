import { PolicyContextProps } from "Policy/context/context";

const usePolicyContextMock = (props: Partial<PolicyContextProps>) => (): PolicyContextProps => ({
  policyPackage: undefined,
  coverageAmount: undefined,
  paymentSchedule: undefined,
  setPolicyPackage: jest.fn(),
  setCoverageAmount: jest.fn(),
  setPaymentSchedule: jest.fn(),
  ...props,
});

export default usePolicyContextMock;
