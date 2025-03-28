import React from 'react';
import styles from './Sidebar.module.scss';
import { SidebarLink } from '@nav/index';
import { sidebarLinks } from '@constants/globals/links';

const Sidebar: React.FC = () => {
  console.log('sidebar render');

  return (
    <div className={styles.LayoutSidebar}>
      <div className={`${styles.Sidebar} ${styles.Collapsed}`}>
        <ul className={styles.SidebarNav}>
          {sidebarLinks.map((link, index) => {
            return (
              <SidebarLink
                href={link.href}
                title={link.title}
                index={index}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
