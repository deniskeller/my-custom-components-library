import React from 'react';
import s from './Home.module.scss';
import useMediaQuery from '@hooks/useMediaQuery';
// import Image from 'next/image';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <div className={s.Container}>
        <h1>Home</h1>

        <h1>
          Текущее состояние: {isMobile ? 'Мобильное устройство' : 'Десктоп'}
        </h1>

        {/* <Image
          src="/unsplash.jpg"
          width={741}
          height={1115}
          alt="default"
          quality={100}
        />

        <Image
          src="/unsplash@2x.jpg"
          width={741}
          height={1115}
          alt="retina"
          quality={100}
        /> */}
      </div>
    </>
  );
};

export default Home;
