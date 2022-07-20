import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './Switch.module.scss';

interface Props {}

const Switch: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default Switch;
