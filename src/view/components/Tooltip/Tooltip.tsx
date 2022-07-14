import React from 'react';
import { BaseButton, BaseContainer, BaseTitle, BaseTooltip } from '@base/index';
import styles from './Tooltip.module.scss';
import { LinkToViewCode } from '@nav/index';

interface Props {}

const Tooltip: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <BaseTitle className="Mb">Tooltip</BaseTitle>

      <div className="Headline Mb">
        <LinkToViewCode
          title="A simple text popup tip."
          href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseInput"
        />
      </div>
      <div className={styles.Tooltips}>
        <BaseTooltip title="some text">
          <span>Tooltip will show on mouse enter.</span>
        </BaseTooltip>
      </div>

      <div className={styles.Buttons}>
        <BaseTooltip title="Top">
          <BaseButton title="Top" />
        </BaseTooltip>
        <BaseTooltip position="right" title="Right">
          <BaseButton title="right" />
        </BaseTooltip>
        <BaseTooltip position="bottom" title="Bottom">
          <BaseButton title="bottom" />
        </BaseTooltip>
        <BaseTooltip position="left" title="Left">
          <BaseButton title="left" />
        </BaseTooltip>
      </div>
    </BaseContainer>
  );
};

export default Tooltip;
