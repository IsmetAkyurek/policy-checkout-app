import { PolicyPackage } from "Policy/types";

const policyPackageMock = (props: Partial<PolicyPackage>): PolicyPackage => ({
  id: 0,
  price: 0,
  name: "",
  coverage: { min: 0, step: 0 },
  features: [],
  description: "",
  paymentSchedules: [],
  ...props,
});

export default policyPackageMock;
