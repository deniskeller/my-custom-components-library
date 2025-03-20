import React from 'react';
import { BaseContainer, BaseText } from '@base/index';
import s from './Typography.module.scss';
import { LinkToViewCode } from '@nav/index';

const Typography: React.FC = () => {
  return (
    <BaseContainer>
      <BaseText className="Mb20">Typography</BaseText>

      <div className="Headline Mb20">
        <LinkToViewCode
          title="My version of the typography component is presented in headings and paragraphs"
          href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseText"
        />
      </div>

      <div className={s.TypographyContent}>
        <BaseText className="Mb20">h1. Heading - default</BaseText>

        <BaseText as="h2" className="Mb20">
          h2. Heading
        </BaseText>

        <BaseText as="p" className="Mb20">
          p. paragraph
        </BaseText>
      </div>
    </BaseContainer>
  );
};

export default Typography;
