import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './ButtonClickToTop.module.scss';

interface Props {}

const ButtonClickToTop: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default ButtonClickToTop;
