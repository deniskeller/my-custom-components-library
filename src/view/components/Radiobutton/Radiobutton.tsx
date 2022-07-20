import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './Radiobutton.module.scss';

interface Props {}

const Radiobutton: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default Radiobutton;
