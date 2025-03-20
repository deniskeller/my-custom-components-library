import React, { useState } from 'react';
import { BaseButton, BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import s from './Button.module.scss';
import { ALL_ICONS } from '@constants/icons';
import { LinkToViewCode } from '@nav/index';

const Button: React.FC = () => {
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

          <BaseButton className="Ml20" as="a">
            Link as button
          </BaseButton>

          <BaseButton className="Ml20" variant="link" as="a">
            Link
          </BaseButton>
        </div>
      </div>

      <div className={s.Buttons}>
        <p className="Mb20">Button size</p>

        <div className="Block">
          <BaseButton>Default</BaseButton>

          <BaseButton className="Ml20" size="small">
            Small
          </BaseButton>
        </div>
      </div>

      <div className={s.Buttons}>
        <p className="Mb20">Button with icon</p>

        <div className="Block">
          <BaseButton
            startIcon={
              <BaseIcon
                viewBox="0 0 18 18"
                fill="white"
                icon={ALL_ICONS.SAVE}
              />
            }
          >
            Default
          </BaseButton>

          <BaseButton
            endIcon={
              <BaseIcon
                viewBox="0 0 18 18"
                fill="white"
                icon={ALL_ICONS.SAVE}
              />
            }
            className="Ml20"
          >
            Default
          </BaseButton>

          <BaseButton className="Ml20">
            <BaseIcon viewBox="0 0 18 18" fill="white" icon={ALL_ICONS.USER} />
          </BaseButton>
        </div>
      </div>

      <div className={s.Buttons}>
        <p className="Mb20">Button colors</p>

        <div className="Block">
          <BaseButton>Default</BaseButton>

          <BaseButton color="secondary" className="Ml20">
            Secondary
          </BaseButton>

          <BaseButton color="success" className="Ml20">
            Success
          </BaseButton>

          <BaseButton color="error" className="Ml20">
            Error
          </BaseButton>

          <BaseButton variant="outlined" className="Ml20">
            Default
          </BaseButton>

          <BaseButton variant="outlined" color="secondary" className="Ml20">
            Secondary
          </BaseButton>

          <BaseButton variant="outlined" color="success" className="Ml20">
            Success
          </BaseButton>

          <BaseButton variant="outlined" color="error" className="Ml20">
            Error
          </BaseButton>
        </div>
      </div>

      <div className={s.Buttons}>
        <p className="Mb20">Button with loading</p>

        <div className="Block">
          <BaseButton loading={loadings[1]} onClick={() => enterLoading(1)}>
            Default
          </BaseButton>

          {/* <BaseButton
            variant="outlined"
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
            className="Ml20"
          >
            Default
          </BaseButton> */}
        </div>
      </div>
    </BaseContainer>
  );
};

export default Button;
