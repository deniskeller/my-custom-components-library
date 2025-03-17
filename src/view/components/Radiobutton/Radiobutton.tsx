import React from 'react';
import {
  BaseContainer,
  BaseRadioButton,
  BaseSubtitle,
  BaseTitle,
} from '@base/index';
import { LinkToViewCode } from '@nav/index';
import styles from './Radiobutton.module.scss';

const radioItems = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B', disabled: true },
  { value: 'C', label: 'C' },
];

const radioItems2 = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Banana', value: 'Banana' },
  { label: 'Mango', value: 'Mango' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

const Radiobutton: React.FC = () => {
  const [value, setValue] = React.useState('A');
  const [value2, setValue2] = React.useState('Banana');

  React.useEffect(() => {
    console.log('value: ', value);
    console.log('value2: ', value2);
  }, [value, value2]);

  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Radiobutton</BaseTitle>

        <div className="Headline Mb20">
          <LinkToViewCode
            title="Used to select a single state from multiple options."
            href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseRadioButton"
          />
        </div>

        <div className={styles.Radiobuttons}>
          <div className="Mb20 df fdc">
            {radioItems?.map((item) => {
              return (
                <BaseRadioButton
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  checked={value === item.value}
                  onChange={() => setValue(item.value)}
                  className="Mb20"
                >
                  {item.label}
                </BaseRadioButton>
              );
            })}
          </div>

          <div>
            <BaseSubtitle className="Mb20">
              Solid radio button style.
            </BaseSubtitle>

            {radioItems2?.map((item) => {
              return (
                <BaseRadioButton
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  variant="button"
                  checked={value2 === item.value}
                  onChange={() => setValue2(item.value)}
                  className="Mb20"
                >
                  {item.label}
                </BaseRadioButton>
              );
            })}
          </div>
        </div>
      </BaseContainer>
    </>
  );
};

export default Radiobutton;
