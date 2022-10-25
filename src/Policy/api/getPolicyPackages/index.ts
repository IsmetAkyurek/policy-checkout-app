import api from "Core/api";
import { PolicyPackage } from "Policy/types";

type GetPolicyPackages = () => Promise<PolicyPackage[]>;

/**
 * Calls the policy package listing API and return the response as a list.
 * @returns {PolicyPackage[]} Policy Package list
 */
const getPolicyPackages: GetPolicyPackages = async () => {
  const response = await api.get<PolicyPackage[]>("policy/packages");
  return response.data;
};

export default getPolicyPackages;
