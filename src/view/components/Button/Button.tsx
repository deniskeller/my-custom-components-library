import React, { useState } from 'react';
import {
  BaseButton,
  BaseButton2,
  BaseContainer,
  BaseIcon,
  BaseTitle,
} from '@base/index';
import s from './Button.module.scss';
import { ALL_ICONS } from '@constants/icons';
import { LinkToViewCode } from '@nav/index';

interface Props {}

const Button: React.FC<Props> = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 2000);
  };

  return (
    <BaseContainer>
      <BaseTitle className="Mb20">Button </BaseTitle>

      <div className="Headline Mb20">
        <LinkToViewCode
          title="Button"
          href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseButton"
        />
      </div>

      <div className={s.Buttons}>
        <p className="Mb20">Basic button</p>

        <div className="Block">
          <BaseButton>Default</BaseButton>

          <BaseButton className="Ml20" variant="outlined">
            Outlined
          </BaseButton>

          <BaseButton className="Ml20" as='a'>
            Link
          </BaseButton>
        </div>
      </div>

      {/* <BaseButton className={s.Button} color="primary" size="small" disabled>
        Disabled
      </BaseButton>

      <BaseButton variant="secondary" size="small" className={s.Button}>
        Secondary variant
      </BaseButton>

      <BaseButton variant="outlined" className={s.Button}>
        Outlined variant
      </BaseButton>

      <BaseButton disabled className={s.Button}>
        Disabled
      </BaseButton>

      <BaseButton as="a" className={s.Button}>
        Type link
      </BaseButton>

      <BaseButton as="a" variant="link" className={s.Button}>
        Type link and variant link
      </BaseButton> */}

      {/* <div className={s.Buttons}>
        <BaseButton2
          title="Success button"
          type="success"
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
          className={s.Button}
        />

        <BaseButton2 title="Cencel button" type="cencel" className={s.Button} />

        <BaseButton2
          title="Disabled button"
          disabled={true}
          className={s.Button}
        />

        <BaseButton2
          title="Click me"
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
          className={s.Button}
        />

        <BaseButton2 title="Link button" type="link" className={s.Button} />

        <BaseButton2 title="Button with icon" className={s.Button}>
          <BaseIcon
            icon={ALL_ICONS.FOOTER_FB}
            viewBox="0 0 20 30"
            className={s.Icon}
          />
        </BaseButton2>
      </div> */}
    </BaseContainer>
  );
};

export default Button;
