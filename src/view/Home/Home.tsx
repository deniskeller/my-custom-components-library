import React, { useEffect } from 'react';
import s from './Home.module.scss';
import useMediaQuery from '@hooks/useMediaQuery';
import useResizeObserver from '@hooks/useResizeObserver';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import useLocalStorage from '@hooks/useLocalStorage';
// import Image from 'next/image';

interface User {
  name: string;
  age: number;
  email: string;
}

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [ref, rect] = useResizeObserver();
  // console.log('rect: ', rect);

  const [targetRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [name, setName] = useLocalStorage<string>('name', 'Guest');

  const [user, setUser] = useLocalStorage<User>('user', {
    name: 'Guest111',
    age: 0,
    email: '',
  });

  useEffect(() => {
    console.log('user: ', user);
  }, []);

  return (
    <>
      <div className={s.Container}>
        <h1>Home</h1>
        {/* ---------------------------------------------------------------------- */}
        <h1>
          Текущее состояние: {isMobile ? 'Мобильное устройство' : 'Десктоп'}
        </h1>

        <hr />
        {/* ---------------------------------------------------------------------- */}
        <div className="" ref={ref as React.RefObject<HTMLDivElement>}>
          <h1>тест хука useResizeObserver</h1>
        </div>
        {rect && (
          <div style={{ marginTop: '16px' }}>
            <p>Ширина: {rect.width}px</p>
            <p>Высота: {rect.height}px</p>
            <p>Верх: {rect.top}px</p>
            <p>Лево: {rect.left}px</p>
          </div>
        )}

        <hr />
        {/* ---------------------------------------------------------------------- */}
        <h1>тест хука useLocalStorage</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <button
          onClick={() =>
            setUser({
              name: 'denis111',
              age: 27,
              email: 'test@test.com',
            })
          }
        >
          кнопка
        </button>

        <hr />
        {/* ---------------------------------------------------------------------- */}

        <h1>тест useIntersectionObserver</h1>
        <div style={{ height: '100vh' }}>
          Скролл для теста useIntersectionObserver
        </div>
        <div
          ref={targetRef as React.RefObject<HTMLDivElement>}
          style={{
            height: '100vh',
            background: isIntersecting ? 'green' : 'red',
          }}
        >
          {isIntersecting ? 'Visible' : 'Not Visible'}
        </div>

        <hr />
        {/* ---------------------------------------------------------------------- */}

        <h1>тест картинок: обычная и ретина</h1>
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
