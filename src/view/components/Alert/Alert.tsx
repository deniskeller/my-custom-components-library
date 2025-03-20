import React from 'react';
import { BaseContainer, BaseText } from '@base/index';
import styles from './Alert.module.scss';

const Alert: React.FC = () => {
  return (
    <>
      <BaseContainer>
        <BaseText className="Mb20">Soon</BaseText>
      </BaseContainer>
    </>
  );
};

export default Alert;
