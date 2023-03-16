import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './Modal.module.scss';

interface Props {}

const Modal: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default Modal;
