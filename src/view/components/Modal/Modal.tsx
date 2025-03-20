import React from 'react';
import { BaseContainer, BaseText } from '@base/index';
import styles from './Modal.module.scss';

interface Props {}

const Modal: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseText className="Mb20">Soon</BaseText>
      </BaseContainer>
    </>
  );
};

export default Modal;
