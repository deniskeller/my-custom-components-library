import React, { ReactNode } from 'react';
import styles from './BaseText.module.scss';

interface Props {
  children: ReactNode;
  style?: object;
  className?: string;
}

const BaseText: React.FC<Props> = ({ children, style, className }) => {
  return (
    <span className={className}>
      <p style={{ ...style }} className={`${styles.Text}`}>
        {children}
      </p>
    </span>
  );
};

export default BaseText;
