import { ReactNode, useState } from "react";
import PolicyContext from "Policy/context/context";
import { PolicyPackage, PolicyPaymentSchedule } from "Policy/types";

export type PolicyContextProviderProps = {
  children: ReactNode;
};

/**
 * Wraps given children with Policy Context and provides necessary functions and data.
 * @param {ReactNode} children Elements to be rendered inside
 * @returns Children elements wrapped with Policy Context Provider
 */
const PolicyContextProvider: React.FC<PolicyContextProviderProps> = ({ children }) => {
  const [policyPackage, setPolicyPackage] = useState<PolicyPackage>();
  const [coverageAmount, setCoverageAmount] = useState<number>();
  const [paymentSchedule, setPaymentSchedule] = useState<PolicyPaymentSchedule>();

  return (
    <PolicyContext.Provider
      value={{
        policyPackage,
        coverageAmount,
        paymentSchedule,
        setPolicyPackage,
        setCoverageAmount,
        setPaymentSchedule,
      }}
    >
      {children}
    </PolicyContext.Provider>
  );
};

export default PolicyContextProvider;
