import React from 'react';
import {
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseSubtitle,
  BaseTitle,
  BaseTooltip,
} from '@base/index';
import styles from './Input.module.scss';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';

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
        <BaseSubtitle className="Mr">Basic usage</BaseSubtitle>

        <BaseTooltip title="Open in Github" position="top">
          <Link href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseInput">
            <a target="_blank" rel="noreferrer">
              <div className="Icon">
                <BaseIcon icon={ALL_ICONS.GITHUB} />
              </div>
            </a>
          </Link>
        </BaseTooltip>
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
