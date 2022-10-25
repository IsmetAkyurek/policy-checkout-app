import {
  WhyUs,
  SummaryCard,
  PackageSelect,
  CoverageAmount,
  PackageFeatures,
  NavigationButtons,
  PaymentScheduleSelect,
} from "Policy/components";
import { Card } from "Core/components";
import styles from "./PolicyLayout.module.scss";

/**
 * Renders the base Policy Module Layout
 * @returns {JSX.Element} Policy Layout
 */
const PolicyLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.content}>
          <img src="/img/logo.svg" alt="Embea" />
        </div>
      </header>
      <main>
        <Card className={styles.contentCard}>
          <PackageSelect />
          <PackageFeatures />
          <CoverageAmount />
          <PaymentScheduleSelect />
          <NavigationButtons />
        </Card>
        <aside>
          <SummaryCard />
          <WhyUs />
        </aside>
      </main>
    </div>
  );
};

export default PolicyLayout;
