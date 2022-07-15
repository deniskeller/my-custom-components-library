import React from 'react';
import { BaseContainer, BaseInput, BaseTitle } from '@base/index';
import styles from './Input.module.scss';
import { LinkToViewCode } from '@nav/index';

interface Props {}

interface IValue {
  text1: string;
  text2: string;
  text3: string;
  password: string;
}

const Input: React.FC<Props> = () => {
  const [value, setValue] = React.useState<IValue>({
    text1: '',
    text2: '',
    text3: '',
    password: '',
  });

  const setNewValue = (val: string, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <BaseContainer>
      <BaseTitle className="Mb">Input</BaseTitle>

      <div className="Headline Mb">
        <LinkToViewCode
          title="Basic usage example."
          href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseInput"
        />
      </div>
      <div className={styles.Inputs}>
        <BaseInput
          name="password"
          placeholder="Basic usage"
          type="text"
          value={value.text1}
          onChange={(val: string) => setNewValue(val, 'text1')}
          className="Mb mw300"
        />

        <BaseInput
          label="Label"
          name="text"
          placeholder="Basic usage"
          type="text"
          value={value.text2}
          onChange={(val: string) => setNewValue(val, 'text2')}
          className="Mb mw300"
        />

        <BaseInput
          label="Input with error"
          name="text"
          error="Some text of error"
          placeholder="Basic usage"
          type="text"
          value={value.text3}
          onChange={(val: string) => setNewValue(val, 'text3')}
          className="Mb mw300"
        />

        <BaseInput
          label="Input password"
          name="password"
          placeholder="Input password"
          type="password"
          icon="eye-off"
          value={value.password}
          onChange={(val: string) => setNewValue(val, 'password')}
          className="Mb mw300"
        />
      </div>
    </BaseContainer>
  );
};

export default Input;
