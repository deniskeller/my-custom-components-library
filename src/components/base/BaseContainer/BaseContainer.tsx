import React, { ReactNode } from "react";
import styles from "./BaseContainer.module.scss";

interface Props {
  children: ReactNode;
  appContent?: String;
}

const BaseContainer: React.FC<Props> = ({ children, appContent }) => {
  return (
    <div
      className={` ${styles.BaseContainer} ${
        appContent ? styles.appContent : ""
      }`}
    >
      {children}
    </div>
  );
};

export default BaseContainer;
