import React from 'react';
import { BaseButton2, BaseContainer, BaseSwitch, BaseText } from '@base/index';
import { LinkToViewCode } from '@nav/index';
import styles from './Switch.module.scss';

interface Props {}

const Switch: React.FC<Props> = () => {
  const [checked, setChecked] = React.useState<boolean>(true);
  const [checked2, setChecked2] = React.useState<boolean>(false);
  const [checked3, setChecked3] = React.useState<boolean>(false);
  const [checked4, setChecked4] = React.useState<boolean>(true);
  const [disabled, setDisabled] = React.useState<boolean>(false);

  return (
    <>
      <BaseContainer>
        <BaseText className="Mb20">Checkbox</BaseText>

        <div className="Headline Mb20">
          <LinkToViewCode
            title="Checkbox component."
            href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseSwitch"
          />
        </div>

        <div className={styles.Switch}>
          <BaseText className="Mb10">Basic</BaseText>
          <BaseSwitch
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="Mb10"
            disabled={disabled}
          />
          <BaseButton2
            title="Toggle disabled"
            onClick={() => {
              setDisabled(!disabled);
            }}
            className="Mb20"
          />

          <BaseText className="Mb10">With text and icon.</BaseText>
          <BaseSwitch
            checked={checked2}
            onChange={() => setChecked2(!checked2)}
            checkedChildren="on"
            unCheckedChildren="off"
            className="Mb20"
          />
          <BaseSwitch
            checked={checked3}
            onChange={() => setChecked3(!checked3)}
            checkedChildren={
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="check"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                className={styles.Icon}
              >
                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
              </svg>
            }
            unCheckedChildren={
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                className={styles.Icon}
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
              </svg>
            }
            className="Mb20"
          />

          <BaseText className="Mb10">With label.</BaseText>
          <BaseSwitch
            checked={checked4}
            onChange={() => setChecked4(!checked4)}
            checkedChildren="1"
            unCheckedChildren="0"
            className="Mb20"
          >
            Some text
          </BaseSwitch>
        </div>
      </BaseContainer>
    </>
  );
};

export default Switch;
