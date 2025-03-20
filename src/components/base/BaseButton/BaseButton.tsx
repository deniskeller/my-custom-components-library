import BaseIcon from '@base/BaseIcon/BaseIcon';
import s from './BaseButton.module.scss';
import React, { ComponentProps, ElementType, ReactNode } from 'react';
import { ALL_ICONS } from '@constants/icons';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string | ReactNode | ReactNode[];
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: string;
  size?: string;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  style?: React.CSSProperties;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

function Button<E extends ElementType = typeof defaultElement>({
  children,
  startIcon,
  endIcon,
  disabled = false,
  variant = 'default',
  color = 'default',
  size = 'default',
  className = '',
  loading = false,
  style,
  as,
  onClick,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;

  const classNames = [
    s.Button,
    s['Button_Variant_' + variant],
    s['Button_Variant_' + variant + '_' + color],
    s['Button_' + size],
    startIcon ? s.Button_StartIcon : '',
    endIcon ? s.Button_EndIcon : '',
    className,
  ].join(' ');

  return (
    <TagName
      className={classNames}
      {...otherProps}
      disabled={disabled}
      style={style}
      onClick={onClick}
    >
      {loading ? (
        <span className={s.IconLoader}>
          <BaseIcon icon={ALL_ICONS.LOADING} viewBox="0 0 38 38" />
        </span>
      ) : null}

      {startIcon}
      {children}
      {endIcon}
    </TagName>
  );
}

export default Button;
