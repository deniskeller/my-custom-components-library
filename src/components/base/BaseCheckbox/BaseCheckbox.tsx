import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '..';
import styles from './BaseCheckbox.module.scss';

interface Props {
  id?: string;
  className?: string;
  error?: string | boolean;
  checkboxValue: boolean;
  children?: ReactNode;
  onClick: (value: boolean) => void;
}

const BaseCheckbox: React.FC<Props> = ({
  children,
  id = '',
  className,
  error,
  checkboxValue,
  onClick,
}) => {
  const [isActive, setIsActive] = React.useState<boolean>(checkboxValue);

  React.useEffect(() => {
    onClick(isActive);
  }, [isActive]);

  return (
    <span
      className={`${className} ${styles.BaseCheckbox}`}
      onClick={() => setIsActive(!isActive)}
    >
      <input
        id={id}
        checked={isActive}
        name="name"
        type="checkbox"
        className={styles.BaseCheckboxInput}
        readOnly
      />
      <span
        className={` ${styles.BaseCheckboxCheck} ${
          isActive ? styles.isActive : ''
        } ${error && !isActive ? styles.isError : ''}`}
      >
        <BaseIcon
          icon={ALL_ICONS.CHECKBOX_CHECK}
          viewBox="0 0 17 19"
          className={styles.BaseCheckboxTick}
        />
      </span>
      {children ? (
        <span className={styles.BaseCheckboxTitle}>{children}</span>
      ) : null}
    </span>
  );
};

export default BaseCheckbox;
