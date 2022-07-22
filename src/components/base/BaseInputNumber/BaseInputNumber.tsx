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
  step?: number;
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
  // formatter?:
}

const BaseInputNumber: React.FC<Props> = ({
  value = 0,
  label,
  type = 'text',
  error,
  name = 'number',
  min = 0,
  max = 100,
  step = 1,
  icon,
  iconPosition,
  required = false,
  placeholder,
  className = '',
  autocomplete = 'off',
  formatter,
  onChange,
  onKeyDown,
}) => {
  //lead to a numeric value
  const toNumber = (value: string | number) => {
    if (typeof value === 'number') return value;

    return parseInt(value.replace(/[^\d]+/g, ''));
  };
  //value formatting
  const formatValue = (value: string | number, formatter = '') => {
    return `${value}%`;
    // return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // return `${formatter}`;
  };

  // only number
  const onKeyPress = (event: React.KeyboardEvent) => {
    if (name === 'number') {
      const regex = /^[0-9]*\.?[0-9]*$/;
      if (!regex.test(event.key)) {
        event.preventDefault();
      } else {
        return true;
      }
    }
  };

  const [price, setPrice] = React.useState(value);
  //change the value using the buttons of the input itself - start
  const plusCount = () => {
    if (Number(price) < max!) {
      setPrice(Number(price) + step);
      onChange(Number(price) + step);
    }
  };

  const minusCount = () => {
    if (Number(price) > min!) {
      setPrice(Number(price) - step);
      onChange(Number(price) - step);
    }
  };
  //change the value using the buttons of the input itself - end

  //listen to keyboard button press event - start
  const refInput = React.useRef(null);
  const computedArrow = (event: React.KeyboardEvent) => {
    if (event.code === 'ArrowUp') {
      plusCount();
    }
    if (event.code === 'ArrowDown') {
      minusCount();
    }
  };

  React.useEffect(() => {
    if (refInput.onFocus()) {
      console.log('refInput: ', refInput.onFocus());
    }
    document.addEventListener('keydown', computedArrow);
    return function cleanup() {
      document.removeEventListener('keydown', computedArrow);
    };
  }, [refInput.current]);
  //listen to keyboard button press event - end

  React.useEffect(() => {
    // console.log('inside value: ', value);
    // console.log('price: ', price);
    if (price > max) setPrice(max);
    if (price <= min || isNaN(Number(price))) setPrice(0);
  }, [value, price, max, min]);

  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <span className={`${styles.InputWrapper} ${error ? styles.Error : ''}`}>
        <input
          value={formatValue(price)}
          placeholder={placeholder}
          type={type}
          name={name}
          min={min}
          max={max}
          step={step}
          required={required}
          autoComplete={autocomplete}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          ref={refInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(toNumber(e.target.value));
            onChange(e.target.value);
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            const numberValue = toNumber(e.target.value);
            setPrice(numberValue);
            e.target.value = formatValue(numberValue);
            onChange(e.target.value);
          }}
          className={`${styles.Input} ${
            iconPosition === 'right' || type === 'password'
              ? styles.InputIconRight
              : iconPosition === 'left'
              ? styles.InputIconLeft
              : ''
          }`}
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
