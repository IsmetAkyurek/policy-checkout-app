import { cx } from "Core/utils";
import Icon from "Core/components/Icon";
import styles from "./List.module.scss";
import { Children, HTMLProps, ReactElement, ReactNode } from "react";

type ListItemProps = {
  children?: ReactNode;
};

export type ListProps = HTMLProps<HTMLUListElement> & {
  children?: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
};

/**
 * Renders a list with given items.
 * @param {ReactElement<ListItemProps>[]} children (Optional) List item values as components
 * @params : HTMLAttributes\<HTMLUListElement\>
 * @returns {JSX.Element}
 */
const List = ({ className, children, ...rest }: ListProps) => {
  return (
    <ul className={cx(styles.container, className)} {...rest}>
      {children &&
        Children.map(children, (item) => (
          <li>
            <Icon name="checkCircle" />
            <span>{item.props.children}</span>
          </li>
        ))}
    </ul>
  );
};

List.Item = (_: ListItemProps) => null;

export default List;
