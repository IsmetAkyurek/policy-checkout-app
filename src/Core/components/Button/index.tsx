import { cx } from "Core/utils";
import styles from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "default" | "yellow" | "yellowOutline";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

/**
 * Renders a button with custom styles.
 * @param {ButtonVariant} variant (Optional) button variant to be styled with
 * @params : HTMLAttributes\<HTMLButtonElement\>
 */
const Button: React.FC<ButtonProps> = ({ className, variant = "default", ...rest }) => {
  return <button className={cx(styles.container, styles[variant], className)} {...rest} />;
};

export default Button;
