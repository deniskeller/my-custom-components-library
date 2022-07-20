import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './Select.module.scss';

interface Props {}

const Select: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default Select;
