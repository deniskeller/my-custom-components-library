import React, { ReactNode, useEffect, useRef, useState } from 'react';
import s from './BaseTooltip.module.scss';
import BasePortal from '@base/BasePortal/BasePortal';
import { useMount } from '@hooks/useMount';

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
  const tooltipRef = useRef<HTMLParagraphElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
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

  const { mounted } = useMount({ opened: isVisible });
  const [animationIn, setAnimationIn] = useState(mounted);

  useEffect(() => {
    setTimeout(() => {
      setAnimationIn(isVisible);
    }, 10);
  }, [isVisible]);

  return (
    <div
      className={`${s.Tooltip} ${className}`}
      ref={targetRef}
      onMouseOver={showTooltip}
      onMouseOut={hideTooltip}
    >
      {isVisible && (
        <BasePortal>
          <p
            ref={tooltipRef}
            data-position={position}
            className={animationIn ? s.Title : s.Title_Hover}
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
