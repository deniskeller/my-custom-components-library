import React from 'react';
import { BaseContainer, BaseText } from '@base/index';
import styles from './Spin.module.scss';

interface Props {}

const Spin: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseText className="Mb20">Soon</BaseText>
      </BaseContainer>
    </>
  );
};

export default Spin;
