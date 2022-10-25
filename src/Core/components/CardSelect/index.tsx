import Card from "Core/components/Card";
import { cx, isEqual } from "Core/utils";
import styles from "./CardSelect.module.scss";
import { ReactElement, useEffect, Children } from "react";

type CardSelectOptionProps<T> = { title: string; subtitle?: string; value: T };

export type CardSelectProps<T> = {
  value?: T;
  onChange: (value?: T) => void;
  defaultActiveFirstOption?: boolean;
  children?: ReactElement<CardSelectOptionProps<T>> | ReactElement<CardSelectOptionProps<T>>[];
};

/**
 * Renders a selection component in card styles with the given children as options.
 * @param {any} value (Optional) Current value of the component
 * @param {Function} onChange Callback function to be called when the value changes
 * @param {boolean} defaultActiveFirstOption (Optional) Toggle key to set the first option as active or not
 * @param {ReactElement<OptionProps>[]} children (Optional) Option values as components
 */
const CardSelect = <T,>({ value, onChange, defaultActiveFirstOption, children }: CardSelectProps<T>) => {
  const onClick = (e: T) => () => {
    onChange(e);
  };

  useEffect(() => {
    if (defaultActiveFirstOption && children && Children.count(children) > 0) {
      const child = Array.isArray(children) ? children[0] : children;
      onChange(child.props.value);
    }
  }, [defaultActiveFirstOption, children]);

  return (
    <div className={styles.container} role="select">
      {children &&
        Children.map(children, (child) => (
          <Card
            hovered
            shadowed
            role="option"
            onClick={onClick(child.props.value)}
            aria-selected={isEqual(value, child.props.value)}
            className={cx(styles.item, [styles.selected, isEqual(value, child.props.value)])}
          >
            <h4>{child.props.title}</h4>
            {child.props.subtitle && <p>{child.props.subtitle}</p>}
          </Card>
        ))}
    </div>
  );
};

/**
 * Dummy component to be used as a React component to provide Radio Options in a better way.
 * @param {RadioOptionProps<any>} _ Radio Option item props
 */
CardSelect.Option = <T,>(_: CardSelectOptionProps<T>) => null;

export default CardSelect;
