import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './Drawer.module.scss';

interface Props {}

const Drawer: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default Drawer;
