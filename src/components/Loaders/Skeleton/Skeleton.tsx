import clsx from "clsx";

import styles from "./Skeleton.module.scss";

interface ISkeletonProps {
  className?: string;
}

export const Skeleton = ({ className, ...rest }: ISkeletonProps) => {
  return <div className={clsx(styles.skeleton, className)} {...rest}></div>;
};
