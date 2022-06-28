import React from 'react';
import styles from './BaseTextarea.module.scss';

interface Props {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string | boolean;
  value: string | number;
  onChange(value: string): void;
}

const BaseTextarea: React.FC<Props> = ({
  value,
  label,
  type = 'Landing',
  error,
  name,
  required,
  placeholder,
  className = '',
  onChange,
}) => {
  return (
    <div className={`${styles.BaseTextarea} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <textarea
        value={value}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        className={`${styles.Textarea} ${error ? styles.Error : ''}`}
      />
      {error ? <div className={styles.ErrorText}>{error}</div> : ''}
    </div>
  );
};
export default BaseTextarea;
