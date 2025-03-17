import React, { ReactNode } from 'react';
import styles from './BaseRadioButton.module.scss';

interface Props {
  value?: string;
  className?: string;
  name?: string;
  error?: string | boolean;
  checked?: boolean;
  disabled?: boolean;
  children?: ReactNode;

  variant?: string;
  onChange: (e: React.FormEvent) => void;
}

const BaseRadioButton: React.FC<Props> = ({
  children,
  value = '',
  className,
  name,
  error,
  checked,
  disabled = false,
  variant = 'default',
  onChange,
}) => {
  const handler = !disabled ? onChange : undefined;

  return (
    <label
      className={`${className} ${styles.BaseRadioButton} ${
        checked && !disabled ? styles.isActive : ''
      } ${disabled ? styles.Disabled : ''} ${styles['RadioButton_' + variant]}`}
      onClick={handler}
    >
      <input
        value={value}
        checked={checked}
        disabled={disabled}
        name={name}
        type="radio"
        className={styles.Input}
        readOnly
        onChange={handler}
      />
      <div
        className={` ${styles.BaseRadioButtonCheck} ${
          checked && !disabled ? styles.isActive : ''
        } ${error && !checked ? styles.isError : ''}`}
      >
        <div className={styles.BaseRadioButtonTick}></div>
      </div>
      {children ? <span className={styles.Label}>{children}</span> : null}
    </label>
  );
};

export default BaseRadioButton;
