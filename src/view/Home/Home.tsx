import React from 'react';
import s from './Home.module.scss';
// import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className={s.Container}>
        <h1>Home</h1>

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
