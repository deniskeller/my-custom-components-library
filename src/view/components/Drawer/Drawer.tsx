import React from 'react';
import { BaseContainer, BaseText } from '@base/index';
import styles from './Drawer.module.scss';

interface Props {}

const Drawer: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseText className="Mb20">Soon</BaseText>
      </BaseContainer>
    </>
  );
};

export default Drawer;
