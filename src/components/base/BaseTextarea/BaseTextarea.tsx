import React from 'react';
import styles from './BaseTextarea.module.scss';

interface Props {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  showCount?: boolean;
  className?: string;
  error?: string | boolean;
  value: string;
  maxLength?: number;
  onChange(value: string): void;
}

const BaseTextarea: React.FC<Props> = ({
  value,
  label,
  showCount = false,
  error,
  name,
  required,
  placeholder,
  className = '',
  maxLength,
  onChange,
}) => {
  return (
    <div className={`${styles.BaseTextarea} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <textarea
        value={value}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        className={`${styles.Textarea} ${error ? styles.Error : ''}`}
      />
      {showCount ? (
        <div className={styles.ShowCount}>
          {value.length} / {maxLength}
        </div>
      ) : null}
      {error ? <div className={styles.ErrorText}>{error}</div> : null}
    </div>
  );
};
export default BaseTextarea;
