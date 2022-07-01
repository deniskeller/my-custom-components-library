import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './SidebarLink.module.scss';

interface Props {
  href: string;
  title: string;
  index: number;
}

const SidebarLink: React.FC<Props> = ({ href, title, index }) => {
  const router = useRouter();

  return (
    <li key={index} className={styles.Li}>
      <Link href={href}>
        <a
          className={`${router.pathname === href ? styles.Active : ''} ${
            styles.Link
          }`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default SidebarLink;
