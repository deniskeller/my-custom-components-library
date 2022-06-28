import React from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';
import styles from './BaseSearchSelect.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  placeholder?: string;
  style?: object;
  type?: string;
  className?: string;
  styles?: string;
  error?: string | boolean;
  options: ISelectItem[];
  name?: string;
  value?: string | number;
  onChange(value: string | number): void;
}

interface ISelectItem {
  code?: number | string;
  title: string;
}

const BaseSearchSelect: React.FC<Props> = ({
  placeholder,
  style,
  className,
  type = 'default',
  options,
  value,
  error,
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState<number | string>(
    ''
  );
  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string | number) => () => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  const computedOptions = (data: ISelectItem[]) => {
    return data.filter((item: ISelectItem) => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  return (
    <div
      className={`${styles.SelectContainer} ${
        styles['Select_' + type]
      } ${className}`}
      ref={selectContainerRef}
    >
      <div
        className={`${styles.SelectHeader}  ${
          isOpen ? styles.SelectHeaderFocus : ''
        } ${error ? styles.Error : ''}`}
        onClick={toggling}
      >
        <p className={`${selectedOption ? styles.NotEmpty : ''}`}>
          {selectedOption || placeholder || value}
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
        <div className={styles.SelectList}>
          <div className={styles.SelectSearch}>
            <BaseIcon
              icon={ALL_ICONS.SEARCH}
              viewBox="0 0 34 34"
              fill="none"
              className={styles.IconSearch}
            />
            <input
              type="text"
              className={styles.Input}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul className={styles.Ul}>
            {computedOptions(options).map((option: ISelectItem) => (
              <li
                className={styles.Li}
                onClick={onOptionClicked(
                  option.code ? option.code! : option.title
                )}
                key={Math.random()}
              >
                {option.code && (
                  <span className={styles.CountryCode}>{option.code}</span>
                )}
                <span className={styles.CountryTitle}>{option.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BaseSearchSelect;
