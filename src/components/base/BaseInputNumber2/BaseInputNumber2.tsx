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
  formatter?: (value: string | number) => string | number;
}

const BaseInputNumber2: React.FC<Props> = ({
  value,
  label,
  type = 'text',
  error,
  name = 'number',
  min,
  max,
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
  const [price, setPrice] = React.useState(value);
  const [blur, setBlur] = React.useState<boolean | null>(null);
  //lead to a numeric value
  const toNumber = (value: string | number) => {
    const parsedValue = parseInt(value.toString().replace(/[^\d]+/g, ''));

    return isNaN(parsedValue) ? 0 : parsedValue;
  };

  // only number
  const onKeyPress = (event: React.KeyboardEvent) => {
    if (name === 'number') {
      const regex = /^\-?\d*?(\.\d+)?/;
      if (!regex.test(event.key)) {
        event.preventDefault();
      } else {
        return true;
      }
    }
  };

  //change the value using the buttons of the input itself - start
  const plusCount = () => {
    if (Number(price) < max) {
      setPrice(Number(price) + step);
      onChange(Number(price) + step);
    }
  };

  const minusCount = () => {
    if (Number(price) > min) {
      setPrice(Number(price) - step);
      onChange(Number(price) - step);
    }
  };
  //change the value using the buttons of the input itself - end

  //listen to keyboard button press event - start
  const computedArrow = (event: KeyboardEvent) => {
    if (event.code === 'ArrowUp' && blur) {
      plusCount();
    }
    if (event.code === 'ArrowDown' && blur) {
      minusCount();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', computedArrow);
    return function cleanup() {
      document.removeEventListener('keydown', computedArrow);
    };
  });
  // listen to keyboard button press event - end

  const onChangeHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const number = toNumber(e.target.value);
    const formatted = formatter ? formatter(number) : number;
    setPrice(formatted);
    onChange(formatted);
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const number = toNumber(e.target.value);
    setPrice(number);
    e.target.value = formatter
      ? formatter(number).toString()
      : number.toString();
    onChange(e.target.value);
    setBlur(false);
  };

  React.useEffect(() => {
    // console.log('inside value: ', value);
    // console.log('blur: ', blur);
    console.log('price: ', price);
    if (price > max && name != 'phone') setPrice(max);
    if (price < min && isNaN(Number(price)) && name != 'phone') setPrice(0);
  }, [value, price, max, min, blur, name, type]);

  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <span className={`${styles.InputWrapper} ${error ? styles.Error : ''}`}>
        <input
          value={formatter ? formatter(price) : price}
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
          onFocus={() => setBlur(true)}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
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
export default BaseInputNumber2;
