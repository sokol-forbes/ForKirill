import { forwardRef, InputHTMLAttributes, ReactElement, ReactNode, useState } from "react";
import clsx from "clsx";

import { PasswordEyeIcon } from "../../../assets";

import styles from "./Input.module.scss";

interface IInputProps extends Omit<InputHTMLAttributes<any>, "title"> {
  error?: string;
  title?: ReactNode;
  isLoading?: boolean;
  skipError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ disabled, title, error, className, isLoading, skipError, type, ...rest }, ref): ReactElement => {
    const [show, setShow] = useState<boolean>(false);

    const onShowClick = () => setShow((prev) => !prev);

    return (
      <div className={clsx(styles[`input__wrapper`], className)}>
        {isLoading ||
          (title && (
            <label data-is-loading={isLoading} className={styles.input__title}>
              {!isLoading && title}
            </label>
          ))}
        <div className={clsx(styles.input__error_wrapper, { [styles.input__error_block]: !skipError })}>
          <input
            data-error={!!error}
            data-is-loading={isLoading}
            ref={ref}
            className={clsx(styles.input, { [styles.input__showPassword_input]: type === "password" })}
            disabled={isLoading || disabled}
            type={show ? "text" : type}
            {...rest}
          />
          {type === "password" && (
            <PasswordEyeIcon
              onClick={onShowClick}
              type={show ? "open" : "closed"}
              size={20}
              className={styles.input__showPassword}
            />
          )}
          {!skipError && <span className={styles.input__error}>{error}</span>}
        </div>
      </div>
    );
  }
);
