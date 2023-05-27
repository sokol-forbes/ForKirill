import { ReactNode, MouseEvent, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { Spinner } from "../../Loaders";

interface IButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  buttonType?: keyof typeof buttonTypes;
}

const buttonTypes = {
  main: undefined,
  success: styles.button__success,
  warning: styles.button__warning,
  error: styles.button__error,
};

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  loading,
  type = "button",
  buttonType,
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      type={type}
      className={clsx(styles.button, className, {
        [styles.button__loading]: loading,
        [buttonTypes[buttonType || "main"] as string]: buttonType,
      })}
    >
      {children}
      {loading && <Spinner className={styles.button__spinner} />}
    </button>
  );
};
