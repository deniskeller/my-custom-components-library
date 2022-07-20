import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './Alert.module.scss';

interface Props {}

const Alert: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default Alert;
