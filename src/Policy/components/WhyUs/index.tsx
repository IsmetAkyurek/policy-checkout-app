import styles from "./WhyUs.module.scss";
import { Card, List } from "Core/components";

/**
 * Renders Why Us panel with the given information.
 * @returns {JSX.Element}
 */
const WhyUs: React.FC = () => {
  return (
    <Card variant="secondary" className={styles.container}>
      <h3>Why Us?</h3>
      <List data-testid="whyus-list">
        <List.Item>100% digital, completely online</List.Item>
        <List.Item>Insured within minutes</List.Item>
        <List.Item>
          Fully automated claims
          <br />
          process - payout in just hours
        </List.Item>
      </List>
    </Card>
  );
};

export default WhyUs;
