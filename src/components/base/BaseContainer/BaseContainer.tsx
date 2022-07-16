import React, { ReactNode } from 'react';
import styles from './BaseContainer.module.scss';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

const BaseContainer: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.BaseContainer} ${className}`}>{children}</div>
  );
};

export default BaseContainer;
