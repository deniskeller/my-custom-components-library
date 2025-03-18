import {
  BaseContainer,
  BaseInput,
  BaseInputNumber,
  BaseInputNumber2,
  BaseSubtitle,
  BaseTextarea,
  BaseTitle,
} from '@base/index';
import { LinkToViewCode } from '@nav/index';
import React from 'react';
import styles from './Input.module.scss';

interface Props {}

interface IValue {
  text1: string;
  text2: string;
  text3: string;
  password: string;
  text4: string;
  user: string;
  textarea1: string;
  textarea2: string;
  default: number;
  phone: number | string;
  currency: number;
  percent: number;
}

const Input: React.FC<Props> = () => {
  const [value, setValue] = React.useState<IValue>({
    text1: '',
    text2: '',
    text3: '',
    password: '',
    text4: '',
    user: '',
    textarea1: '',
    textarea2: '',
    default: 0,
    phone: '',
    currency: 0,
    percent: 0,
  });

  const setNewValue = (val: string | number, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <div className={styles.Inputs}>
        <BaseContainer>
          <BaseTitle className="Mb20">Input</BaseTitle>

          <div className="Headline Mb20">
            <LinkToViewCode
              title="Basic usage example."
              href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseInput"
            />
          </div>
          <BaseInput
            name="password"
            placeholder="Basic usage"
            type="text"
            value={value.text1}
            onChange={(val: string) => setNewValue(val, 'text1')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Label"
            name="text"
            placeholder="Basic usage"
            type="text"
            value={value.text2}
            onChange={(val: string) => setNewValue(val, 'text2')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Input with error"
            name="text"
            error="Some text of error"
            placeholder="Basic usage"
            type="text"
            value={value.text3}
            onChange={(val: string) => setNewValue(val, 'text3')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Input password"
            name="password"
            placeholder="Input password"
            type="password"
            icon="eye-off"
            value={value.password}
            onChange={(val: string) => setNewValue(val, 'password')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Input with icon left"
            name="text"
            placeholder="Basic usage"
            type="text"
            icon="save"
            iconPosition="left"
            value={value.text4}
            onChange={(val: string) => setNewValue(val, 'text4')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Input with icon right"
            name="text"
            placeholder="Basic usage"
            type="text"
            icon="user"
            iconPosition="right"
            value={value.user}
            onChange={(val: string) => setNewValue(val, 'user')}
            className="Mb20 mw300"
          />
        </BaseContainer>

        <BaseContainer>
          <div className="Headline Mb20">
            <LinkToViewCode
              title="Input number"
              href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseInputNumber"
            />
          </div>

          <BaseInputNumber
            label="Default input number"
            placeholder="Input number"
            value={value.default}
            type="number"
            onChange={(val: number) => setNewValue(val, 'default')}
            className="mw300"
          />

          <BaseInputNumber
            label="Input phone"
            className="mw300"
            placeholder="+7(999) 999-99-99"
            value={value.phone}
            name="phone"
            onChange={(val: number) => setNewValue(val, 'phone')}
            formatter={(value) => {
              return (
                value
                  .toString()
                  .slice(0, 18)
                  .replace(/\D/g, '')
                  .replace(/(\d{0})(\d)/, '+7 $1')
                  .replace(/(\d{3})(\d)/, '($1) $2')
                  .replace(/(\d{3})(\d)/, '$1-$2')
                  .replace(/(\d{2})(\d{2})/, '$1-$2') || '+7 '
              );
            }}
          />

          <BaseInputNumber
            label="Input with currency"
            placeholder="Input number"
            value={value.currency}
            onChange={(val: number) => setNewValue(val, 'currency')}
            className="mw300"
            step={0.5}
            max={200000}
            formatter={(value) => {
              return (
                value.toString().replace(/\D/g, '').replace(/(\d)/, '$ $1') ||
                '$ '
              );
            }}
          />

          <BaseInputNumber
            label="Input with percent"
            placeholder="Input number"
            value={value.percent}
            onChange={(val: number) => setNewValue(val, 'percent')}
            className="mw300"
            formatter={(value) => `${value}%`}
          />

          <BaseInputNumber2
            label="Input with currency2"
            placeholder="Input number"
            value={value.currency}
            onChange={(val: number) => setNewValue(val, 'currency')}
            className="mw300"
            step={0.5}
            max={100000}
            formatter={(value) => {
              return (
                value.toString().replace(/\D/g, '').replace(/(\d)/, '$ $1') ||
                '$ '
              );
            }}
          />
        </BaseContainer>
      </div>

      <div className={styles.Textareas}>
        <BaseContainer>
          <div className="Headline Mb20">
            <LinkToViewCode
              title="TextArea."
              href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseTextarea"
            />
          </div>

          <BaseSubtitle className="Mb20">For multi-line input.</BaseSubtitle>

          <BaseTextarea
            className="mw400"
            placeholder="Some text"
            value={value.textarea1}
            onChange={(val: string) => setNewValue(val, 'textarea1')}
          />
        </BaseContainer>
        <BaseContainer>
          <BaseSubtitle className="Mb20">With character counting</BaseSubtitle>

          <BaseTextarea
            placeholder="Some text"
            showCount
            maxLength={100}
            label="Label for textarea with counter"
            value={value.textarea2}
            onChange={(val: string) => setNewValue(val, 'textarea2')}
          />
        </BaseContainer>
      </div>
    </>
  );
};

export default Input;
