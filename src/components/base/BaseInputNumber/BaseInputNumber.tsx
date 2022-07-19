import React from 'react';
import styles from './BaseInputNumber.module.scss';
import { BaseIcon } from '..';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  type?: string;
  name?: string;
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

const BaseInputNumber: React.FC<Props> = ({
  value = 0,
  label,
  type = 'number',
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
  // const inputRef = React.useRef(null);
  const [count, setCount] = React.useState(value);
  // console.log('inputRef: ', inputRef.current.value);

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (name === 'number') {
      const regex = /[0-9]|\./;
      if (!regex.test(event.key)) {
        event.preventDefault();
      } else {
        return true;
      }
    }
  };

  const plusCount = () => {
    setCount(Number(count) + 1);
  };

  const minusCount = () => {
    if (Number(count) > 0) {
      setCount(Number(count) - 1);
    }
  };

  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <span className={`${styles.InputWrapper} ${error ? styles.Error : ''}`}>
        <input
          value={value}
          type={type}
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
          // ref={inputRef}
        />

        {name === 'number' ? (
          <>
            <div className={styles.InputNumberHandlerWrap}>
              <div
                className={`${styles.InputNumberHandler} ${styles.InputNumberHandlerUp}`}
                onClick={plusCount}
              >
                <div
                  className={`${styles.Anticon} ${styles.InputNumberHandlerUpInner}`}
                >
                  <BaseIcon
                    viewBox="64 64 896 896"
                    fill="black"
                    icon={ALL_ICONS.INPUT_NUMBER_ARROW}
                    className={`${styles.IconArrow} ${styles.IconArrowUp}`}
                  />
                </div>
              </div>

              <div
                className={`${styles.InputNumberHandler} ${styles.InputNumberHandlerDown}`}
                onClick={minusCount}
              >
                <div
                  className={`${styles.Anticon} ${styles.InputNumberHandlerDownInner}`}
                >
                  <BaseIcon
                    viewBox="64 64 896 896"
                    fill="black"
                    icon={ALL_ICONS.INPUT_NUMBER_ARROW}
                    className={`${styles.IconArrow} ${styles.IconArrowDown}`}
                  />
                </div>
              </div>
            </div>
          </>
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
export default BaseInputNumber;
