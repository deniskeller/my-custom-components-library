import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '../..';
import styles from './BaseButton.module.scss';

interface Props {
  children: ReactNode | ReactNode[];
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
}

const BaseButton: React.FC<Props> = ({
  children,
  onClick,
  type = 'default',
  disabled = false,
  className = '',
  loading = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${className} ${styles.Button} ${styles['Button_' + type]}`}
      onClick={onClick}
    >
      {loading ? (
        <span>
          <BaseIcon
            icon={ALL_ICONS.LOADING}
            viewBox="0 0 38 38"
            className={styles.IconLoading}
          />
        </span>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

export default BaseButton;
