// @ts-nocheck
import React from 'react';
import { BaseContainer, BaseSelect, BaseTitle } from '@base/index';
import styles from './Select.module.scss';
import { LinkToViewCode } from '@nav/index';

interface Props {}

const mockData = [
  { value: 'option1', title: 'option 1' },
  { value: 'option2', title: 'option 2' },
  { value: 'option3', title: 'option 3' },
  { value: 'option4', title: 'option 4' },
  { value: 'option5', title: 'option 5' },
];

const Select: React.FC<Props> = () => {
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
          {/* <BaseSelect
            className={styles.Select}
            placeholder="Choose something"
            options={mockData}
            onChange={(e) => e}
          /> */}

          <BaseSelect
            className={styles.Select}
            placeholder="Choose something"
            options={[
              { value: 'Rock' },
              { value: 'Paper' },
              { value: 'Scissors' },
            ]}
            multiple
          />

          {/* <Select
            label="React Select"
            placeholder="Pick one"
            options={[
              { value: 'Rock' },
              { value: 'Paper' },
              { value: 'Scissors' },
            ]}
          />
          <Select
            label="React Multiple Select"
            placeholder="Pick some"
            options={[
              { value: 'Rock' },
              { value: 'Paper' },
              { value: 'Scissors' },
            ]}
            multiple
          /> */}
        </div>
      </BaseContainer>
    </>
  );
};

export default Select;
