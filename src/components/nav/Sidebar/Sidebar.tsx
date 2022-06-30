import React from 'react';
import styles from './Sidebar.module.scss';
import { BaseIcon } from '@base/index';
import { NavbarLink } from '@nav/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {}

const links = [
  {
    href: '/components/input',
    title: 'Inputs',
  },
];

const Sidebar: React.FC<Props> = () => {
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
    <div className={styles.LayoutSidebar}>
      <div className={`${styles.Sidebar} ${styles.Collapsed}`}>
        <ul className={styles.SidebarNav}>
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

export default Sidebar;

{
  /* <aside
  class="ant-layout-sider ant-layout-sider-dark Default-module__Sider__hu7kq"
  style="flex: 0 0 200px; max-width: 200px; min-width: 200px; width: 200px;"
>
  <div class="ant-layout-sider-children">
    <ul
      class="ant-menu ant-menu-root ant-menu-inline ant-menu-dark Default-module__Menu__LAC2z"
      role="menu"
      tabindex="0"
      data-menu-list="true"
    >
      <li
        class="ant-menu-item Default-module__MenuItem__eySnB"
        role="menuitem"
        tabindex="-1"
        data-menu-id="rc-menu-uuid-83671-2-0"
        style="padding-left: 24px;"
      >
        <span
          role="img"
          aria-label="poweroff"
          class="anticon anticon-poweroff ant-menu-item-icon"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="poweroff"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"></path>
          </svg>
        </span>
        <span class="ant-menu-title-content">
          <a href="/management">Контроль и управление</a>
        </span>
      </li>
      <li
        class="ant-menu-item ant-menu-item-selected Default-module__MenuItem__eySnB"
        role="menuitem"
        tabindex="-1"
        data-menu-id="rc-menu-uuid-83671-2-1"
        style="padding-left: 24px;"
      >
        <span
          role="img"
          aria-label="bar-chart"
          class="anticon anticon-bar-chart ant-menu-item-icon"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="bar-chart"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"></path>
          </svg>
        </span>
        <span class="ant-menu-title-content">
          <a href="/analytics">Аналитика и отчетность</a>
        </span>
      </li>
      <li
        class="ant-menu-item Default-module__MenuItem__eySnB"
        role="menuitem"
        tabindex="-1"
        data-menu-id="rc-menu-uuid-83671-2-2"
        style="padding-left: 24px;"
      >
        <span
          role="img"
          aria-label="team"
          class="anticon anticon-team ant-menu-item-icon"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="team"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"></path>
          </svg>
        </span>
        <span class="ant-menu-title-content">
          <a href="/users">Пользователи и доступ</a>
        </span>
      </li>
      <li
        class="ant-menu-item Default-module__MenuItem__eySnB"
        role="menuitem"
        tabindex="-1"
        data-menu-id="rc-menu-uuid-83671-2-3"
        style="padding-left: 24px;"
      >
        <span
          role="img"
          aria-label="notification"
          class="anticon anticon-notification ant-menu-item-icon"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="notification"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"></path>
          </svg>
        </span>
        <span class="ant-menu-title-content">
          <a href="/alerts">Оповещения</a>
        </span>
      </li>
      <li
        class="ant-menu-item Default-module__MenuItem__eySnB"
        role="menuitem"
        tabindex="-1"
        data-menu-id="rc-menu-uuid-83671-2-4"
        style="padding-left: 24px;"
      >
        <span
          role="img"
          aria-label="book"
          class="anticon anticon-book ant-menu-item-icon"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="book"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"></path>
          </svg>
        </span>
        <span class="ant-menu-title-content">
          <a href="/event_log">Журнал событий</a>
        </span>
      </li>
    </ul>
    <div aria-hidden="true" style="display: none;"></div>
    <header
      class="ant-layout-header Default-module__Burger__bdwm3"
      style="padding: 0px;"
    >
      <span
        role="img"
        aria-label="menu-fold"
        tabindex="-1"
        class="anticon anticon-menu-fold trigger"
      >
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="menu-fold"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path>
        </svg>
      </span>
    </header>
  </div>
</aside> */
}
