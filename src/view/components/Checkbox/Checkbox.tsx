import React from 'react';
import {
  BaseButton,
  BaseCheckbox,
  BaseContainer,
  BaseTitle,
} from '@base/index';
import styles from './Checkbox.module.scss';
import { LinkToViewCode } from '@nav/index';

interface Props {}

const Checkbox: React.FC<Props> = () => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const [value, setValue] = React.useState({
    isChecked1: false,
    isChecked2: true,
  });

  const setNewValue = (checked: boolean, key: string) => {
    setValue((prev) => ({ ...prev, [key]: checked }));
  };

  return (
    <BaseContainer>
      <BaseTitle className="Mb20">Checkbox</BaseTitle>

      <div className="Headline Mb20">
        <LinkToViewCode title="Checkbox component." href="" />
      </div>

      <div className={styles.Checkboxs}>
        <div className="df Mb20">
          <BaseCheckbox
            checked={value.isChecked1}
            onChange={() => setNewValue(!value.isChecked1, 'isChecked1')}
            disabled={isDisabled}
            className="Mr20"
          />
          <BaseButton
            title="Disable"
            className="mw300"
            onClick={() => setIsDisabled(!isDisabled)}
          />
        </div>

        <BaseCheckbox
          checked={value.isChecked2}
          onChange={() => setNewValue(!value.isChecked2, 'isChecked2')}
          className="Mb20"
        >
          Checkbox
        </BaseCheckbox>
      </div>
    </BaseContainer>
  );
};

export default Checkbox;
