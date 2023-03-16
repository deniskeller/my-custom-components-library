import React from 'react';
import { BaseButton, BaseContainer, BaseTitle, BaseTooltip } from '@base/index';
import styles from './Tooltip.module.scss';
import { LinkToViewCode } from '@nav/index';

interface Props {}

const Tooltip: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <BaseTitle className="Mb20">Tooltip</BaseTitle>

      <div className="Headline Mb20">
        <LinkToViewCode
          title="A simple text popup tip."
          href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseTooltip"
        />
      </div>
      <div className={styles.Tooltips}>
        <BaseTooltip title="some text">
          <span>Tooltip will show on mouse enter.</span>
        </BaseTooltip>
      </div>

      <div className={styles.Buttons}>
        <div className={styles.ButtonsTop}>
          <BaseTooltip title="Top">
            <BaseButton title="Top" />
          </BaseTooltip>
        </div>

        <div className={styles.ButtonsMiddle}>
          <BaseTooltip
            position="left"
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus modi impedit, et perferendis vitae unde laborum. Ullam at ipsa sit."
          >
            <BaseButton title="left" />
          </BaseTooltip>
          <BaseTooltip
            position="right"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatibus? "
          >
            <BaseButton title="right" />
          </BaseTooltip>
        </div>

        <div className={styles.ButtonsBottom}>
          <BaseTooltip
            position="bottom"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatibus?"
          >
            <BaseButton title="bottom" />
          </BaseTooltip>
        </div>
      </div>
    </BaseContainer>
  );
};

export default Tooltip;
