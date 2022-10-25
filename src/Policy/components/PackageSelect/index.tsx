import { useEffect } from "react";
import policyApi from "Policy/api";
import { useGet } from "Core/hooks";
import usePolicyContext from "Policy/context";
import styles from "./PackageSelect.module.scss";
import { CardSelect, Loading } from "Core/components";

/**
 * Renders package selector with available packages.
 * @returns {JSX.Element}
 */
const PackageSelect: React.FC = () => {
  const packages = useGet(policyApi.getPolicyPackages);
  const { policyPackage, setPolicyPackage } = usePolicyContext();

  useEffect(() => {
    if (packages.data && packages.data.length > 0) {
      setPolicyPackage(packages.data[0]);
    }
  }, [packages.data]);

  return (
    <section className={styles.container}>
      <h1>Your offer</h1>
      <Loading loading={packages.loading}>
        <CardSelect value={policyPackage} onChange={setPolicyPackage}>
          {packages.data?.map((item) => (
            <CardSelect.Option key={item.id} value={item} title={item.name} subtitle={item.description} />
          ))}
        </CardSelect>
      </Loading>
    </section>
  );
};

export default PackageSelect;
