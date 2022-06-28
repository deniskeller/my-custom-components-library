import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '..';
import styles from './BaseButton.module.scss';

interface Props {
  children: ReactNode;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  style?: object;
  type?: string;
  disabled?: boolean;
  className?: string;
  styles?: string;
  loading?: boolean;
}

const BaseButton: React.FC<Props> = ({
  children,
  onClick,
  style,
  type = 'default',
  disabled = false,
  className,
  loading = false
}) => {
  return (
    <div className={` ${className}`}>
      <button
        disabled={disabled}
        style={{ ...style }}
        className={`${styles.Button} ${styles['Button_' + type]}`}
        onClick={onClick}
      >
        {
          loading ?
          <BaseIcon
            icon={ALL_ICONS.LOADING}
            viewBox='0 0 38 38'
            className={styles.IconLoading}
          /> 
          : children
        }        
      </button>
    </div>
  );
};

export default BaseButton;
