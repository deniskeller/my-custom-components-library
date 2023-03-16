import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import styles from './Slider.module.scss';

interface Props {}

const Slider: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseTitle className="Mb20">Soon</BaseTitle>
      </BaseContainer>
    </>
  );
};

export default Slider;
