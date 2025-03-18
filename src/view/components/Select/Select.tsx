// @ts-nocheck
import React from 'react';
import { BaseContainer, BaseSelect, BaseTitle } from '@base/index';
import styles from './Select.module.scss';
import { LinkToViewCode } from '@nav/index';

interface Props {}

const mockData = [
  { value: 'Option 1' },
  { value: 'Option 2' },
  { value: 'Option 3' },
  { value: 'Option 4' },
  { value: 'Option 5' },
  { value: 'Option 6' },
];

const Select: React.FC<Props> = () => {
  const [values, setValues] = React.useState('');
  const [values2, setValues2] = React.useState([]);

  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Select</BaseTitle>

        <div className="Headline Mb20">
          <LinkToViewCode
            title="Basic usage example."
            href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseSelect"
          />
        </div>

        <div className={styles.Select}>
          <BaseSelect
            label="kek"
            className={styles.Select}
            placeholder="Choose something"
            options={mockData}
            onChange={setValues}
          />

          <BaseSelect
            className={styles.Select}
            placeholder="Choose something"
            options={mockData}
            onChange={setValues2}
            multiple
          />
        </div>
      </BaseContainer>
    </>
  );
};

export default Select;
