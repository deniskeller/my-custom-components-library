import React, { ReactNode } from 'react';
import styles from './BaseSwitch.module.scss';

interface Props {
  checked: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onChange: (e: React.FormEvent) => void;
  checkedChildren?: ReactNode | string;
  unCheckedChildren?: ReactNode | string;
}

const BaseSwitch: React.FC<Props> = ({
  disabled = false,
  className,
  checked,
  children,
  onChange,
  checkedChildren,
  unCheckedChildren,
}) => {
  const handler = !disabled ? onChange : undefined;
  console.log('checkedChildren: ', typeof checkedChildren);

  return (
    <div className={`${styles.Wrapper} ${className}`}>
      <span
        className={` ${styles.Switch} ${checked ? styles.isChecked : ''} ${
          disabled ? styles.isDisabled : ''
        }`}
        onClick={handler}
      >
        <input
          checked={checked}
          type="checkbox"
          disabled={disabled}
          onChange={handler}
          className={styles.Switch_Input}
        />
        {checkedChildren && (
          <div
            className={`${styles.Switch_CheckedChildren} ${
              typeof checkedChildren == 'string'
                ? styles.Switch_Children_String
                : ''
            }`}
          >
            {checkedChildren}
          </div>
        )}
        {unCheckedChildren && (
          <div
            className={`${styles.Switch_UnCheckedChildren} ${
              typeof unCheckedChildren == 'string'
                ? styles.Switch_Children_String
                : ''
            }`}
          >
            {unCheckedChildren}
          </div>
        )}
        <div className={styles.Switch_Button}></div>
      </span>
      {children && <span className={styles.Label}>{children}</span>}
    </div>
  );
};

export default BaseSwitch;
