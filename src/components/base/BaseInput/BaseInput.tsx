import React from 'react';
import styles from './BaseInput.module.scss';
import { BaseIcon } from '..';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  type: string;
  name: string;
  label?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  icon?: string | boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string | number;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseInput: React.FC<Props> = ({
  value,
  label,
  type,
  error,
  name,
  min,
  max,
  icon,
  required = false,
  placeholder,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  //for button type password start
  const [typeIcon, setTypeIcon] = React.useState<string>('eye-off');
  const [newType, setType] = React.useState<string>(type);

  const changeType = (value: string) => {
    if (value == 'eye') {
      setTypeIcon('eye');
      setType('text');
    } else {
      setTypeIcon('eye-off');
      setType('password');
    }
  };
  //for button type password end

  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <span className={styles.InputWrapper}>
        <input
          value={value}
          type={newType || type}
          className={`${styles.Input} ${error ? styles.Error : ''}`}
          name={name}
          min={min}
          max={max}
          placeholder={placeholder}
          required={required}
          autoComplete={autocomplete}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onKeyDown={onKeyDown}
        />

        {typeIcon === 'eye' ? (
          <BaseIcon
            fill="#1890ff"
            viewBox="64 64 896 896"
            icon={ALL_ICONS.EYE}
            className={`${styles.Icon} ${styles.IconPassword}`}
            onClick={() => changeType('eye-off')}
          />
        ) : null}

        {icon === 'eye-off' && typeIcon === 'eye-off' ? (
          <BaseIcon
            viewBox="64 64 896 896"
            fill="grey"
            icon={ALL_ICONS.EYE_OFF}
            className={`${styles.Icon} ${styles.IconPassword}`}
            onClick={() => changeType('eye')}
          />
        ) : null}
      </span>

      {error ? <div className={styles.ErrorText}>{error}</div> : ''}
    </div>
  );
};
export default BaseInput;
