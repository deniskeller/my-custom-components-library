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
  title,
  position = 'top',
  className = '',
}) => {
  return (
    <div
      className={styles.tooltip}
      data-position={position}
      data-tool-tip={title}
    >
      {children}
    </div>
  );
};

export default BaseTooltip;
