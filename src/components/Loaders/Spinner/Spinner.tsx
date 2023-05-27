import clsx from 'clsx'

import styles from './Spinner.module.scss'

interface ILoaderProps {
  className?: string
}

export const Spinner = ({ className }: ILoaderProps) => {
  return (
    <div className={clsx(styles['lds-ring'], className)}>
      <div className={styles['lds-ring__element']} data-i="1"></div>
      <div className={styles['lds-ring__element']} data-i="2"></div>
      <div className={styles['lds-ring__element']} data-i="3"></div>
      <div className={styles['lds-ring__element']} data-i="4"></div>
    </div>
  )
}
