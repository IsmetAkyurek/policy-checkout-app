import { Card } from "Core/components";
import { formatAmount } from "Policy/utils";
import usePolicyContext from "Policy/context";
import styles from "./SummaryCard.module.scss";

/**
 * Renders the calculated monthly amount with the card styles.
 * @returns {JSX.Element}
 */
const SummaryCard: React.FC = () => {
  const { paymentSchedule, policyPackage } = usePolicyContext();

  return (
    <Card variant="primary" className={styles.container}>
      <div>
        <img src="/img/ribbon.svg" alt="Ribbon" />
        <h4>Krebsversicherung</h4>
      </div>
      {paymentSchedule && policyPackage && (
        <div className={styles.price}>
          <div className={styles.amount}>
            {formatAmount(policyPackage.price * paymentSchedule.discountMultiplier)}
            <sup>€</sup>
          </div>
          <span>/ month</span>
        </div>
      )}
    </Card>
  );
};

export default SummaryCard;
