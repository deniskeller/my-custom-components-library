import React, { ReactNode, useEffect, useRef, useState } from 'react';
import s from './BaseTooltip.module.scss';
import BasePortal from '@base/BasePortal/BasePortal';

interface Props {
  children: ReactNode | ReactNode[];
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const BaseTooltip: React.FC<Props> = ({
  children,
  content,
  position = 'top',
  className = '',
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Показ тултипа
  const handleShowTooltip = () => {
    if (!isVisible) {
      setIsMounted(true);
      setIsVisible(true);
    }
  };

  // Скрытие тултипа
  const handleHideTooltip = () => {
    if (isVisible) {
      setIsVisible(false);
    }
  };

  // Запуск анимации появления после монтирования
  useEffect(() => {
    if (isMounted && isVisible) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, 10);

      return () => clearTimeout(timeout);
    }
  }, [isMounted, isVisible]);

  // Обработка завершения анимации скрытия
  useEffect(() => {
    if (!isVisible && isMounted && tooltipRef.current) {
      const tooltipElement = tooltipRef.current;

      const handleTransitionEnd = () => {
        setIsMounted(false);
      };

      tooltipElement.addEventListener('transitionend', handleTransitionEnd, {
        once: true,
      });

      return () => {
        tooltipElement.removeEventListener(
          'transitionend',
          handleTransitionEnd,
        );
      };
    }
  }, [isVisible, isMounted]);

  // Определение положения тултипа
  useEffect(() => {
    if (isVisible && tooltipRef.current && childRef.current) {
      const childRect = childRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (position) {
        case 'top':
          top = childRect.top - tooltipRect.height;
          left = childRect.left + (childRect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = childRect.bottom;
          left = childRect.left + (childRect.width - tooltipRect.width) / 2;
          break;
        case 'left':
          top = childRect.top + (childRect.height - tooltipRect.height) / 2;
          left = childRect.left - tooltipRect.width;
          break;
        case 'right':
          top = childRect.top + (childRect.height - tooltipRect.height) / 2;
          left = childRect.right;
          break;
        default:
          break;
      }

      // Проверка на выход за границы экрана
      if (top < 0) top = 0;
      if (left < 0) left = 0;
      if (top + tooltipRect.height > window.innerHeight)
        top = window.innerHeight - tooltipRect.height;
      if (left + tooltipRect.width > window.innerWidth)
        left = window.innerWidth - tooltipRect.width;

      setTooltipPosition({ top, left });
    }
  }, [isVisible, position]);

  // Обработка событий для мобильных устройств
  useEffect(() => {
    const handleTouchEnd = () => {
      handleHideTooltip();
    };

    const childElement = childRef.current;
    if (childElement) {
      childElement.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (childElement) {
        childElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <div
      ref={childRef}
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
      onTouchStart={handleShowTooltip}
      className={`${s.Tooltip_Wrapper} ${className}`}
    >
      {children}

      {isMounted && (
        <BasePortal>
          <div
            ref={tooltipRef}
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
            }}
            className={`${s.Tooltip} ${isAnimating && isVisible ? s.Tooltip__Show : s.Tooltip__Hide}`}
          >
            {content}
          </div>
        </BasePortal>
      )}
    </div>
  );
};

export default BaseTooltip;
