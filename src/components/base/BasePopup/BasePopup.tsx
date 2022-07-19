// @ts-nocheck
import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setPopup } from "store/modals/actions";
// import { RootState } from "store/reducers/rootReducer";
import useOnClickOutside from '@hooks/useOnClickOutside';
import styles from './BasePopup.module.scss';
import { BaseIcon } from '..';
import { ALL_ICONS } from '@constants/icons';
import { EsoqueState } from '@store/store';
import { actions as actionsModals } from '@store/modals/reducer';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  type?: string;
}

const BasePopup: React.FC<Props> = ({
  children,
  className,
  type = 'default',
}) => {
  const dispatch = useDispatch();
  // <<<<<<< HEAD
  const { popup, id } = useSelector((state: EsoqueState) => state.modals);
  // =======
  //   const { popup, id } = useSelector((state: RootState) => state.modal);
  //   console.log('popup: ', popup);
  // >>>>>>> origin/html

  const thisClass = React.useRef<HTMLDivElement>(null);
  const thisModal = React.useRef<HTMLDivElement>(null);

  // console.log("thisClass: ", thisClass.current);
  const clickOutsideHandler = () => {
    hidePopup();
  };
  useOnClickOutside(thisModal, clickOutsideHandler);

  const bodyClassName = 'overflow-hidden';

  React.useEffect(() => {
    if (thisClass.current?.classList.contains(popup)) {
      showPopup();
    }
    if (!popup) {
      hidePopup();
    }
  }, [popup, id]);

  const keyUp = (e: React.KeyboardEvent<Element>) => {
    if (e.keyCode == 27) {
      hidePopup();
    }
  };

  //убрать @ts-nocheck  и разобратсья почему ругается на keyUp
  const showPopup = () => {
    document.body.classList.add(bodyClassName);
    document.addEventListener('keyup', keyUp);
  };

  const hidePopup = () => {
    document.body.classList.remove(bodyClassName);
    document.removeEventListener('keyup', keyUp);
    dispatch(actionsModals.setPopup({ popup: '', id: 0 }));
  };

  // React.useEffect(() => {
  //   console.log('thisClass: ', thisClass);
  //   console.log('popup: ', popup);
  // }, [thisClass, popup]);

  return (
    <div
      className={` ${styles.BasePopup} ${
        popup ? styles.Visible : ''
      } ${className}`}
      ref={thisClass}
    >
      <div
        className={`${styles.BasePopupContent} ${
          type == 'mini' ? styles.Mini : ''
        }`}
        ref={thisModal}
      >
        <span onClick={hidePopup}>
          <BaseIcon
            icon={ALL_ICONS.LANDING_POPUP_CLOSE}
            viewBox="0 0 24 32"
            className={styles.BasePopupClose}
          />
        </span>
        {children}
      </div>
    </div>
  );
};

export default BasePopup;
