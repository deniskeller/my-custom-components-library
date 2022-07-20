import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './Checkbox.module.scss';

interface Props {}

const Checkbox: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default Checkbox;
