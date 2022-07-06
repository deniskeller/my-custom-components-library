import React, { ReactNode } from 'react';
import styles from './BaseContainer.module.scss';

interface Props {
  children: ReactNode | ReactNode[];
}

const BaseContainer: React.FC<Props> = ({ children }) => {
  return <div className={styles.BaseContainer}>{children}</div>;
};

export default BaseContainer;
