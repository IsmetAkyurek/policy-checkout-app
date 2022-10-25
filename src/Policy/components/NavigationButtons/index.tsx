import { Button, Icon } from "Core/components";
import styles from "./NavigationButtons.module.scss";

/**
 * Renders app navigation buttons.
 * @returns {JSX.Element}
 */
const NavigationButtons: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button data-testid="back-button" variant="yellowOutline">
        <Icon name="arrowLeft" />
      </Button>
      <Button data-testid="healtcheck-button" variant="yellow" className={styles.next}>
        To health check
      </Button>
    </div>
  );
};

export default NavigationButtons;
