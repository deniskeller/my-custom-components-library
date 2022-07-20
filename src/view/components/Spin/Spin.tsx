import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './Spin.module.scss';

interface Props {}

const Spin: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default Spin;
