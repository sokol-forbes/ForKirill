import { forwardRef, InputHTMLAttributes, ReactElement, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Input.module.scss";

interface IInputProps extends Omit<InputHTMLAttributes<any>, "title"> {
  error?: string;
  title?: ReactNode;
  isLoading?: boolean;
  skipError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ disabled, title, error, className, isLoading, skipError, ...rest }, ref): ReactElement => (
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
          className={styles.input}
          disabled={isLoading || disabled}
          {...rest}
        />
        {!skipError && <span className={styles.input__error}>{error}</span>}
      </div>
    </div>
  )
);
