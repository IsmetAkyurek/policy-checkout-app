import usePolicyContext from "Policy/context";
import { StepPriceInput } from "Core/components";
import styles from "./CoverageAmount.module.scss";

/**
 * Renders the Coverage Amount input selector based on the selected Policy Package.
 * @returns {JSX.Element}
 */
const CoverageAmount: React.FC = () => {
  const { coverageAmount, policyPackage, setCoverageAmount } = usePolicyContext();

  return policyPackage ? (
    <section className={styles.container} data-testid="coverage-amount">
      <h3>Coverage Amount</h3>
      <StepPriceInput
        value={coverageAmount}
        onChange={setCoverageAmount}
        min={policyPackage.coverage.min}
        step={policyPackage.coverage.step}
      />
    </section>
  ) : (
    <></>
  );
};

export default CoverageAmount;
