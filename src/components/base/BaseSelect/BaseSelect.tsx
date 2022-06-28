import React, { ReactNode, useState, useRef } from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';
import styles from './BaseSelect.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  placeholder?: string;
  style?: object;
  type?: string;

  className?: string;
  error?: string | boolean;
  styles?: string;
  options: ISelectItem[];
  widget?: boolean;
  onChange: (value: string) => void;
}

interface ISelectItem {
  value: string;
  title: string;
}

const BaseSelect: React.FC<Props> = ({
  widget,
  placeholder,
  style,

  className,
  type = 'default',
  options,
  error,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div
      className={`${styles.SelectContainer} ${
        styles['Select_' + type]
      } ${className} ${error ? styles.SelectError : ''} `}
      ref={selectContainerRef}
    >
      <div
        className={`${styles.SelectHeader}  ${
          isOpen ? styles.SelectHeaderFocus : ''
        } ${error ? styles.Error : ''}`}
        onClick={toggling}
      >
        <p className={`${selectedOption ? styles.NotEmpty : ''}`}>
          {selectedOption || placeholder}
        </p>
        <BaseIcon
          icon={ALL_ICONS.SELECT_ARROW}
          viewBox="0 0 16 16"
          className={`${styles.IconArrow} ${styles.IconArrowTop}`}
        />
        <BaseIcon
          icon={ALL_ICONS.SELECT_ARROW}
          viewBox="0 0 16 16"
          className={`${styles.IconArrow} ${styles.IconArrowBottom}`}
        />
      </div>
      {error ? <div className={styles.ErrorText}>{error}</div> : ''}
      {isOpen && (
        <ul className={styles.SelectList}>
          {options.map((option: ISelectItem) => (
            <li
              className={styles.ListItem}
              onClick={onOptionClicked(widget ? option.title : option.value)}
              key={Math.random()}
            >
              <span className={styles.ListItemTitle}>{option.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BaseSelect;
