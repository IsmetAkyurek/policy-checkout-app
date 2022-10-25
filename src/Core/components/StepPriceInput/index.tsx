import { useEffect } from "react";
import Icon from "Core/components/Icon";
import Button from "Core/components/Button";
import styles from "./StepPriceInput.module.scss";

export type StepPriceInputProps = {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange: (value: number) => void;
};

/**
 * Renders a number input with button controls.
 * @param {string} min (Optional) Minimum value that can be set
 * @param {string} max (Optional) Maximum value that can be set
 * @param {string} step (Optional) Increase/decrease amoun when value changes
 * @param {number} value (Optional) Current value of the component
 * @param {Function} onChange Callback function to be called when the value changes
 */
const StepPriceInput: React.FC<StepPriceInputProps> = ({ value = 0, min, max, onChange, step = 1 }) => {
  const onDecrease = () => {
    onChange(value - step);
  };

  const onIncrease = () => {
    onChange(value + step);
  };

  useEffect(() => {
    if (min !== undefined && min > value) {
      onChange(min);
    }
  }, [min]);

  useEffect(() => {
    if (max !== undefined && max < value) {
      onChange(max);
    }
  }, [max]);

  return (
    <div className={styles.container}>
      <div className={styles.price}>{value.toLocaleString()} €</div>
      <div className={styles.buttons}>
        <Button onClick={onDecrease} disabled={min === value} data-testid="decrease-button">
          <Icon name="minus" />
        </Button>
        <Button onClick={onIncrease} disabled={max === value} data-testid="increase-button">
          <Icon name="plus" />
        </Button>
      </div>
    </div>
  );
};

export default StepPriceInput;
