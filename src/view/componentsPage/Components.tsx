import Link from 'next/link';
import React from 'react';
import styles from './Components.module.scss';

const Components = () => {
  return (
    <div className={styles.Wrapper}>
      Компоненты
      <Link href="/components/input">
        <a>Input</a>
      </Link>
    </div>
  );
};

export default Components;
