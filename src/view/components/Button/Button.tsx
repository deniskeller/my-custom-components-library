import React, { useState } from 'react';
import { BaseButton, BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import styles from './Button.module.scss';
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
      <BaseTitle className="Mb20">Button</BaseTitle>

      <div className="Headline Mb20">
        <LinkToViewCode
          title="Button"
          href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseButton"
        />
      </div>

      <div className={styles.Buttons}>
        <BaseButton title="Default button" className={styles.Button} />

        <BaseButton
          title="Success button"
          type="success"
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
          className={styles.Button}
        />

        <BaseButton
          title="Cencel button"
          type="cencel"
          className={styles.Button}
        />

        <BaseButton
          title="Disabled button"
          disabled={true}
          className={styles.Button}
        />

        <BaseButton
          title="Click me"
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
          className={styles.Button}
        />

        <BaseButton title="Link button" type="link" className={styles.Button} />

        <BaseButton title="Button with icon" className={styles.Button}>
          <BaseIcon
            icon={ALL_ICONS.FOOTER_FB}
            viewBox="0 0 20 30"
            className={styles.Icon}
          />
        </BaseButton>
      </div>
    </BaseContainer>
  );
};

export default Button;
