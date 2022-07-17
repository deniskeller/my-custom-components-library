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
  iconPosition?: string;
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
  iconPosition,
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

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (type === 'number') {
      const regex = /[0-9]|\./;
      if (!regex.test(event.key)) {
        event.preventDefault();
      } else {
        return true;
      }
    }
  };

  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <span className={styles.InputWrapper}>
        <input
          value={value}
          type={newType || type}
          className={`${styles.Input} ${error ? styles.Error : ''} ${
            iconPosition === 'right' || type === 'password'
              ? styles.InputIconRight
              : iconPosition === 'left'
              ? styles.InputIconLeft
              : ''
          }`}
          name={name}
          min={min}
          max={max}
          placeholder={placeholder}
          required={required}
          autoComplete={autocomplete}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value.trim())
          }
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
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

        {icon === 'save' ? (
          <BaseIcon
            viewBox="0 0 18 18"
            fill="grey"
            icon={ALL_ICONS.SAVE}
            className={`${styles.Icon} ${
              iconPosition === 'right' ? styles.IconRight : styles.IconLeft
            }`}
          />
        ) : null}

        {icon === 'user' ? (
          <BaseIcon
            viewBox="0 0 18 18"
            fill="grey"
            icon={ALL_ICONS.USER}
            className={`${styles.Icon} ${
              iconPosition === 'right' ? styles.IconRight : styles.IconLeft
            }`}
          />
        ) : null}
      </span>

      {error ? <div className={styles.ErrorText}>{error}</div> : ''}
    </div>
  );
};
export default React.memo(BaseInput);
