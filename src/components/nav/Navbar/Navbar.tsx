import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { BaseIcon } from '@base/index';
import { NavbarLink } from '@nav/index';

import { ALL_ICONS } from '@constants/icons';

interface Props {}

const links = [
  {
    href: '/',
    title: 'home',
  },

  {
    href: '/components',
    title: 'components',
  },
];

const Navbar: React.FC<Props> = () => {
  const [modal, setModal] = React.useState(false);

  const menuOpen = () => {
    setModal(true);
  };

  React.useEffect(() => {
    const className = 'overflow-hidden';

    if (modal) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [modal]);

  return (
    <div className={styles.Container}>
      <div className={styles.Navbar}>
        <Link href="/">
          <a>
            <div className={styles.NavbarLogo}>
              <BaseIcon
                className={styles.LogoImage}
                icon={ALL_ICONS.LOGO}
                viewBox="0 0 60 60"
              />

              <div className={styles.LogoTitle}>
                My custom
                <br />
                components lIbrary
              </div>
            </div>
          </a>
        </Link>

        <ul className={styles.NavbarNav}>
          {links.map((link, index) => {
            return (
              <NavbarLink
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

export default Navbar;
