import { useContext } from "react";
import PolicyContext, { PolicyContextProps } from "./context";

/**
 * Hook function to get the Policy Context.
 * @returns {PolicyContextProps} Policy Context
 */
const usePolicyContext = (): PolicyContextProps => {
  const policyContext = useContext(PolicyContext);
  return policyContext;
};

export default usePolicyContext;
