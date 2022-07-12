import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '..';
import styles from './BaseButton.module.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  title?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
}

const BaseButton: React.FC<Props> = ({
  title = '',
  children,
  onClick,
  type = 'default',
  disabled = false,
  className = '',
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.Button} ${styles['Button_' + type]}`}
    >
      {loading ? (
        <span className={styles.IconLoader}>
          <BaseIcon icon={ALL_ICONS.LOADING} viewBox="0 0 38 38" />
        </span>
      ) : (
        ''
      )}

      {children}
      <span className={styles.Title}>{title}</span>
    </button>
  );
};

export default BaseButton;
