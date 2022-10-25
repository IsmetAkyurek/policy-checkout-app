import { cx } from "Core/utils";
import { HTMLAttributes } from "react";
import styles from "./Card.module.scss";

export type CardVariant = "default" | "primary" | "secondary";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  hovered?: boolean;
  bordered?: boolean;
  shadowed?: boolean;
  variant?: CardVariant;
};

/**
 * Renders a div with card styles.
 * @params : HTMLAttributes\<HTMLDivElement\>
 */
const Card: React.FC<CardProps> = ({
  className,
  hovered = false,
  shadowed = false,
  bordered = false,
  variant = "default",
  ...rest
}) => {
  return (
    <div
      className={cx(
        className,
        styles[variant],
        styles.container,
        [styles.hovered, hovered],
        [styles.bordered, bordered],
        [styles.shadowed, shadowed]
      )}
      {...rest}
    />
  );
};

export default Card;
