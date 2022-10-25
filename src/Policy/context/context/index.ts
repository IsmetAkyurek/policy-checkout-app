import { createContext, Dispatch } from "react";
import { PolicyPackage, PolicyPaymentSchedule } from "Policy/types";

export type PolicyContextProps = {
  coverageAmount?: number;
  policyPackage?: PolicyPackage;
  paymentSchedule?: PolicyPaymentSchedule;
  setCoverageAmount: Dispatch<React.SetStateAction<number | undefined>>;
  setPolicyPackage: Dispatch<React.SetStateAction<PolicyPackage | undefined>>;
  setPaymentSchedule: Dispatch<React.SetStateAction<PolicyPaymentSchedule | undefined>>;
};

const PolicyContext = createContext({} as PolicyContextProps);

export default PolicyContext;
