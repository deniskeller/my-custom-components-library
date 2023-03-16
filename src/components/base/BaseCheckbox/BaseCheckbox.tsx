import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '..';
import styles from './BaseCheckbox.module.scss';

interface Props {
  id?: string;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  error?: string | boolean;
  children?: ReactNode;
  onChange: (e: React.FormEvent) => void;
}

const BaseCheckbox: React.FC<Props> = ({
  id = '',
  disabled = false,
  className,
  error,
  children,
  checked,
  onChange,
}) => {
  const handler = !disabled ? onChange : undefined;

  return (
    <span
      className={`${className} ${styles.BaseCheckbox} ${
        disabled ? styles.isDisabled : ''
      }`}
      onClick={handler}
    >
      <input
        id={id}
        checked={checked}
        type="checkbox"
        className={styles.BaseCheckboxInput}
        disabled={disabled}
        onChange={handler}
      />
      <span
        className={` ${styles.BaseCheckboxCheck} ${
          checked ? styles.isActive : ''
        } ${error && !checked ? styles.isError : ''}`}
      >
        <BaseIcon
          icon={ALL_ICONS.CHECKBOX_CHECK}
          viewBox="0 0 17 19"
          className={styles.BaseCheckboxTick}
        />
      </span>
      {children ? (
        <span
          className={`${styles.BaseCheckboxLabel} ${
            disabled ? styles.isDisabled : ''
          }
      `}
        >
          {children}
        </span>
      ) : null}
    </span>
  );
};

export default BaseCheckbox;
