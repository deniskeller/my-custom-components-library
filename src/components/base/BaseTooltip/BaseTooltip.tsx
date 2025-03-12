import React, { ReactNode, useRef, useState } from 'react';
import s from './BaseTooltip.module.scss';
import BasePortal from '@base/BasePortal/BasePortal';

interface Props {
  children?: ReactNode | ReactNode[];
  title?: string;
  className?: string;
  position?: string;
}

const BaseTooltip: React.FC<Props> = ({
  children,
  title = '',
  // position = 'top',
  className = '',
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      console.log('rect: ', rect);
      const scrollY = window.scrollY;

      setPosition({
        top: rect.top + scrollY,
        left: rect.left + rect.width / 2,
      });
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`${s.Tooltip} ${className}`}
      ref={targetRef}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {isVisible && (
        <BasePortal>
          <p
            data-position={position}
            className={s.Title}
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            {title}
          </p>
        </BasePortal>
      )}
      {children}
    </div>
  );
};

export default BaseTooltip;
