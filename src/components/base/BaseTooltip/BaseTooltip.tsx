import React, { ReactNode } from 'react';
import styles from './BaseTooltip.module.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  title?: string;
  className?: string;
  position?: string;
}

const BaseTooltip: React.FC<Props> = ({
  children,
  title = '',
  position = 'top',
  className = '',
}) => {
  return (
    <div className={`${styles.Tooltip} ${className}`}>
      <p data-position={position} className={styles.Title}>
        {title}
      </p>
      {children}
    </div>
  );
};

export default BaseTooltip;
