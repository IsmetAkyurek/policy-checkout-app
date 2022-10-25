import { Radio } from "Core/components";
import { formatAmount } from "Policy/utils";
import usePolicyContext from "Policy/context";
import styles from "./PaymentScheduleSelect.module.scss";

/**
 * Renders the Payment Schedule selector based on the selected Policy Package.
 * @returns {JSX.Element}
 */
const PaymentScheduleSelect: React.FC = () => {
  const { policyPackage, paymentSchedule, setPaymentSchedule } = usePolicyContext();

  return policyPackage ? (
    <section className={styles.container}>
      <h3>Payment Schedule</h3>
      <Radio value={paymentSchedule} onChange={setPaymentSchedule} defaultActiveFirstOption>
        {policyPackage.paymentSchedules.map((schedule) => (
          <Radio.Option
            value={schedule}
            key={schedule.name}
            title={schedule.name}
            subtitle={`${formatAmount(schedule.discountMultiplier * policyPackage.price)} € / month`}
          />
        ))}
      </Radio>
    </section>
  ) : (
    <></>
  );
};

export default PaymentScheduleSelect;
