import Card from "Core/components/Card";
import styles from "./Radio.module.scss";
import { cx, isEqual } from "Core/utils";
import { Children, ReactElement, useEffect } from "react";

type RadioOptionProps<T> = { title: string; subtitle?: string; value: T };

export type RadioProps<T> = {
  value?: T;
  onChange: (value?: T) => void;
  defaultActiveFirstOption?: boolean;
  children?: ReactElement<RadioOptionProps<T>> | ReactElement<RadioOptionProps<T>>[];
};

/**
 * Renders a radio component in card styles with the given children as options.
 * @param {any} value (Optional) Current value of the component
 * @param {Function} onChange Callback function to be called when the value changes
 * @param {ReactElement<RadioOptionProps>[]} children (Optional) Option values as components
 */
const Radio = <T,>({ value, onChange, defaultActiveFirstOption, children }: RadioProps<T>) => {
  const onClick = (e: T) => () => {
    onChange(e);
  };

  useEffect(() => {
    const selected = children ? Children.map(children, (x) => x).find((x) => x.props.value === value) : undefined;
    if (children && ((defaultActiveFirstOption && !value) || (!selected && value))) {
      const child = Array.isArray(children) ? children[0] : children;
      onChange(child.props.value);
    }
  }, [defaultActiveFirstOption, children]);

  return (
    <div className={styles.container} role="radiogroup">
      {children &&
        Children.map(children, (child) => (
          <Card
            bordered
            role="radio"
            onClick={onClick(child.props.value)}
            aria-checked={isEqual(value, child.props.value)}
            className={cx(styles.item, [styles.selected, isEqual(value, child.props.value)])}
          >
            <div className={styles.radio}>
              <span className={styles.dot} />
            </div>
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
Radio.Option = <T,>(_: RadioOptionProps<T>) => null;

export default Radio;
