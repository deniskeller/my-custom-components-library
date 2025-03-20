import React from 'react';
import { BaseContainer, BaseText } from '@base/index';
import styles from './Slider.module.scss';

interface Props {}

const Slider: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <BaseText className="Mb20">Soon</BaseText>
      </BaseContainer>
    </>
  );
};

export default Slider;
