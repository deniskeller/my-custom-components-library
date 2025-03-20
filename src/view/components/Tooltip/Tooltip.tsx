import React from 'react';
import { BaseButton, BaseContainer, BaseText, BaseTooltip } from '@base/index';
import styles from './Tooltip.module.scss';
import { LinkToViewCode } from '@nav/index';

const Tooltip: React.FC = () => {
  return (
    <BaseContainer>
      <BaseText className="Mb20">Tooltip</BaseText>

      <div className="Headline Mb20">
        <LinkToViewCode
          title="A simple text popup tip."
          href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseTooltip"
        />
      </div>

      <div className={styles.Tooltips}>
        <BaseTooltip content="some text">
          <p>Tooltip will show on mouse hover.</p>
        </BaseTooltip>
      </div>

      <div className={styles.Buttons}>
        <div className={styles.ButtonsTop}>
          <BaseTooltip
            content="This is a top tooltip This is a top tooltip This is a top tooltip"
            position="top"
          >
            <BaseButton>Top</BaseButton>
          </BaseTooltip>
        </div>

        <div className={styles.ButtonsMiddle}>
          <BaseTooltip content="This is a left tooltip" position="left">
            <BaseButton>Left</BaseButton>
          </BaseTooltip>

          <BaseTooltip content="This is a right tooltip" position="right">
            <BaseButton>Right</BaseButton>
          </BaseTooltip>
        </div>

        <div className={styles.ButtonsBottom}>
          <BaseTooltip content="This is a bottom tooltip" position="bottom">
            <BaseButton>bottom</BaseButton>
          </BaseTooltip>
        </div>
      </div>
    </BaseContainer>
  );
};

export default Tooltip;
