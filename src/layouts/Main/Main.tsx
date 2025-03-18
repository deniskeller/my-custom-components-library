import React, { ReactNode } from 'react';
import styles from './Main.module.scss';

import { Navbar, Sidebar } from '@nav/index';
// import { Footer } from "components/footer";

interface Props {
  children: ReactNode | ReactNode[];
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.Section}>
        <Sidebar />
        <div>
          <div className={styles.Content}>{children}</div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Main;
