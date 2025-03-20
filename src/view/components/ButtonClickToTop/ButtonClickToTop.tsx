import React from 'react';
import { BaseContainer, BaseText } from '@base/index';
import styles from './ButtonClickToTop.module.scss';

interface Props {}

const ButtonClickToTop: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseText className="Mb20">Soon</BaseText>
      </BaseContainer>
    </>
  );
};

export default ButtonClickToTop;
