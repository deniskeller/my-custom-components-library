import React, { ReactNode } from 'react';
import styles from './Default.module.scss';

import { Navbar } from '@nav/index';
// import { Footer } from "components/footer";

interface Props {
  children: ReactNode | ReactNode[];
}

const Default: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Default;
