import React, { ComponentProps, ElementType, ReactNode } from 'react';
import s from './BaseText.module.scss';

type OwnProps<E extends ElementType = ElementType> = {
  children: ReactNode | ReactNode[];
  className?: string;
  as?: E;
};

type Props<E extends ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps>;

const defaultElement = 'h1';

function BaseText<E extends ElementType = typeof defaultElement>({
  children,
  className = '',
  as,
  ...otherProps
}: Props<E>) {
  const TagName = as || defaultElement;

  const classNames = [s.Text, s['Text_' + TagName], className].join(' ');

  return (
    <TagName className={classNames} {...otherProps}>
      {children}
    </TagName>
  );
}

export default BaseText;
