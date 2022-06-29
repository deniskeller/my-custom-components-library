import React from 'react';
import styles from './Main.module.scss';

import { Navbar } from '@nav/index';
// import { Footer } from "components/footer";

interface Props {
  children: JSX.Element;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
