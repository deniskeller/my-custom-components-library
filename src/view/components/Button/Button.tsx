import React from 'react';
import { BaseButton, BaseContainer } from '@base/index';
import styles from './Button.module.scss';

interface Props {}

const Button: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <div className={styles.Buttons}>
        <BaseButton className={styles.Button}>Кнопка</BaseButton>
        <BaseButton loading className={styles.Button}>
          Кнопка
        </BaseButton>
        <BaseButton loading className={styles.Button}>
          Кнопка
        </BaseButton>
      </div>
    </BaseContainer>
  );
};

export default Button;
