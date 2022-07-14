import React from 'react';
import { BaseContainer, BaseInput, BaseTitle } from '@base/index';
import styles from './Input.module.scss';
import { LinkToViewCode } from '@nav/index';

interface Props {}

const Input: React.FC<Props> = () => {
  const [password, setPassword] = React.useState<string>('');
  // Password
  const changePassword = (val: string) => {
    console.log('val: ', val);
    setPassword(val);
  };

  return (
    <BaseContainer>
      <BaseTitle className="Mb">Input</BaseTitle>

      <div className="Headline Mb">
        <LinkToViewCode
          title="Basic usage"
          href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseInput"
        />
      </div>
      <div className={styles.Inputs}>
        <BaseInput
          name="password"
          placeholder="input password"
          type="password"
          required
          autocomplete="on"
          value={password}
          onChange={changePassword}
          className={styles.Input}
        />

        <BaseInput
          label="Password"
          name="password"
          placeholder="input password"
          type="password"
          required
          autocomplete="on"
          value={password}
          onChange={changePassword}
          className={styles.Input}
        />

        <BaseInput
          label="Password"
          name="password"
          error="werwer"
          placeholder="input password"
          type="password"
          required
          autocomplete="on"
          value={password}
          onChange={changePassword}
          className={styles.Input}
        />
      </div>
    </BaseContainer>
  );
};

export default Input;
