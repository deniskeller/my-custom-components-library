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

  function inc() {
    let number = document.querySelector('[name="number"]');
    number.value = parseInt(number.value) + 1;
  }

  function dec() {
    let number = document.querySelector('[name="number"]');
    if (parseInt(number.value) > 0) {
      number.value = parseInt(number.value) - 1;
    }
  }

  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <span className={`${styles.InputWrapper} ${error ? styles.Error : ''}`}>
        <input
          value={value}
          type={newType || type}
          className={`${styles.Input}  ${
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

        {type === 'number' ? (
          <>
            <div class="ant-input-number-handler-wrap">
              <span
                unselectable="on"
                role="button"
                aria-label="Increase Value"
                aria-disabled="false"
                class="ant-input-number-handler ant-input-number-handler-up"
                onClick={inc}
              >
                <span
                  role="img"
                  aria-label="up"
                  class="anticon anticon-up ant-input-number-handler-up-inner"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="up"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                  </svg>
                </span>
              </span>
              <span
                unselectable="on"
                role="button"
                aria-label="Decrease Value"
                aria-disabled="false"
                class="ant-input-number-handler ant-input-number-handler-down"
                onClick={dec}
              >
                <span
                  role="img"
                  aria-label="down"
                  class="anticon anticon-down ant-input-number-handler-down-inner"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="down"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </span>
              </span>
            </div>
          </>
        ) : null}

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
