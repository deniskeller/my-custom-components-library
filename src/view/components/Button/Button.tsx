import React from 'react';
import { BaseButton } from '@base/index';
import styles from './Button.module.scss';

interface Props {}

const Button: React.FC<Props> = () => {
  return (
    <div className={styles.Button}>
      <BaseButton>Кнопка</BaseButton>
    </div>
  );
};

export default Button;
