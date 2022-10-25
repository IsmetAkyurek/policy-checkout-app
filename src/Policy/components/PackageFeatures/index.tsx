import { List } from "Core/components";
import usePolicyContext from "Policy/context";
import styles from "./PackageFeatures.module.scss";

/**
 * Renders Policy features as a list based on the selected Policy Package.
 * @returns {JSX.Element}
 */
const PackageSelect: React.FC = () => {
  const { policyPackage } = usePolicyContext();

  return policyPackage ? (
    <section className={styles.container} data-testid="package-features">
      <List>
        {policyPackage.features.map((feature) => (
          <List.Item key={feature}>{feature}</List.Item>
        ))}
      </List>
    </section>
  ) : (
    <></>
  );
};

export default PackageSelect;
