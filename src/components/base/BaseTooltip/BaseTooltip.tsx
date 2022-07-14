import React, { ReactNode } from 'react';
import styles from './BaseTooltip.module.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  title?: string;
  position?: string;
}

const BaseTooltip: React.FC<Props> = ({
  children,
  title = '',
  position = 'top',
}) => {
  return (
    <div className={styles.Tooltip}>
      <p data-position={position} className={styles.Title}>
        {title}
      </p>
      {children}
    </div>
  );
};

export default BaseTooltip;
