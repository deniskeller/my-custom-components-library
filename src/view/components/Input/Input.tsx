import React from 'react';
import { BaseInput } from '@base/index';
import styles from './Input.module.scss';

interface Props {}

const Input: React.FC<Props> = () => {
  const [password, setPassword] = React.useState<string>('');
  // Password
  const changePassword = (val: string) => {
    console.log('val: ', val);
    setPassword(val);
  };

  return (
    <div className={styles.Input}>
      <BaseInput
        name="password"
        placeholder="Repeat Password"
        type="password"
        required
        autocomplete="on"
        value={password}
        onChange={changePassword}
      />
    </div>
  );
};

export default Input;
