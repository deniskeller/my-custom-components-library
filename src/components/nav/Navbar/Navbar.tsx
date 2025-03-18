import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavbarLink } from '@nav/index';

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

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.Container}>
      <div
        className={`${styles.Navbar} ${
          router.pathname !== '/' ? styles.MaxWidth : ''
        }`}
      >
        <Link href="/">
          <div className={styles.NavbarLogo}>
            {/* <BaseIcon
                className={styles.LogoImage}
                icon={ALL_ICONS.LOGO}
                viewBox="0 0 60 60"
              /> */}

            <div className={styles.LogoTitle}>DK UI components</div>
          </div>
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
