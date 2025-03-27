import React, { useEffect, useRef } from 'react';
import s from './Home.module.scss';
import { useFormValidation } from '@hooks/useFormValidation';
// import Image from 'next/image';
// import { BaseButton } from '@base/index';
// import useScrollbarWidth from '@hooks/useScrollbarWidth';
// import useResizeObserver from '@hooks/useResizeObserver';
// import useIntersectionObserver from '@hooks/useIntersectionObserver';
// import useLocalStorage from '@hooks/useLocalStorage';
// import useCopyToClipboard from '@hooks/useCopyToClipboard';
// import useMediaQuery from '@hooks/useMediaQuery';

// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

type FormData = {
  login: string;
  password: string;
  confirmPassword: string;
  about: string;
  gender: string;
  agreement: boolean;
};

const Home = () => {
  // const { isMobile, isTablet, isDesktop } = useMediaQuery();

  // const [ref, rect] = useResizeObserver();

  // const [targetRef, isIntersecting] = useIntersectionObserver({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });

  // const [name, setName] = useLocalStorage<string>('name', 'Guest');

  // const [user, setUser] = useLocalStorage<User>('user', {
  //   name: 'Guest111',
  //   age: 0,
  //   email: '',
  // });
  // const addDefaultImage = event => {
  // 	event.target.src = 'https://placehold.co/600x400?text=no+image';
  // };

  // const [isCopied, copyToClipboard] = useCopyToClipboard();
  // const textToCopy = 'Hello, World!';

  // const scrollbarWidth = useScrollbarWidth();

  const initialValues: FormData = {
    login: '',
    password: '',
    confirmPassword: '',
    about: '',
    gender: '',
    agreement: false
  };

  const validationRules = {
    login: {
      required: true,
      minLength: 3,
      maxLength: 12
    },
    password: {
      required: true,
      minLength: 8,
      maxLength: 16,
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
      validate: (value: string) => {
        if (!/(?=.*\d)/.test(value))
          return 'Пароль должен содержать хотя бы одну цифру';
        if (!/(?=.*[a-z])/.test(value))
          return 'Пароль должен содержать хотя бы одну строчную букву';
        if (!/(?=.*[A-Z])/.test(value))
          return 'Пароль должен содержать хотя бы одну заглавную букву';
        return true;
      }
    },
    confirmPassword: {
      required: true,
      validate: (value: string, formData: FormData) =>
        value === formData.password || 'Пароли не совпадают'
    },
    gender: {
      required: true
    },
    agreement: {
      required: true,
      validate: (value: boolean) => value || 'Необходимо дать согласие'
    }
  };

  const {
    formData,
    errors,
    handleChange,
    handleBlur,
    validateForm,
    resetForm
  } = useFormValidation<FormData>(initialValues, validationRules);

  const loginInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Форма отправлена:', formData);
      alert('Форма успешно отправлена!');
    }
  };

  useEffect(() => {
    if (loginInputRef.current) {
      loginInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    console.log('errors: ', errors);
  }, [errors]);

  return (
    <>
      <div className={s.Container}>
        <h1>Home</h1>

        <form
          onSubmit={handleSubmit}
          autoComplete='off'
          noValidate
          className={s.registrationForm}
        >
          <div className={s.field}>
            <label className={s.field__label} htmlFor='login'>
              Логин
            </label>
            <input
              autoComplete='off'
              ref={loginInputRef as React.RefObject<HTMLInputElement>}
              className={s.field__control}
              id='login'
              name='login'
              value={formData.login}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-errormessage='login-errors'
            />
            <FieldErrors errors={errors.login} id='login-errors' />
          </div>

          <div className={s.field}>
            <label className={s.field__label} htmlFor='password'>
              Пароль
            </label>
            <input
              autoComplete='off'
              className={s.field__control}
              id='password'
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-errormessage='password-errors'
            />
            <FieldErrors errors={errors.password} id='password-errors' />
          </div>

          <div className={s.field}>
            <label className={s.field__label} htmlFor='confirmPassword'>
              Подтверждение пароля
            </label>
            <input
              className={s.field__control}
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-errormessage='confirmPassword-errors'
            />
            <FieldErrors
              errors={errors.confirmPassword}
              id='confirmPassword-errors'
            />
          </div>

          <div className={s.field}>
            <label className={s.field__label} htmlFor='about'>
              О себе
            </label>
            <textarea
              className={s.field__control}
              id='about'
              name='about'
              value={formData.about}
              onChange={handleChange}
            />
          </div>

          <fieldset className={s.radios}>
            <legend className={s.radios__legend}>Ваш пол</legend>

            <div>
              <input
                className={s.radios__control}
                id='male'
                name='gender'
                type='radio'
                value='Мужской'
                checked={formData.gender === 'Мужской'}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-errormessage='gender-errors'
              />
              <label className={s.radios__label} htmlFor='male'>
                Мужской
              </label>
            </div>

            <div>
              <input
                className={s.radios__control}
                id='female'
                name='gender'
                type='radio'
                value='Женский'
                checked={formData.gender === 'Женский'}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-errormessage='gender-errors'
              />
              <label className={s.radios__label} htmlFor='female'>
                Женский
              </label>
            </div>

            <FieldErrors errors={errors.gender} id='gender-errors' />
          </fieldset>

          <div className={`${s.field} ${s.checkbox}`}>
            <input
              className={s.checkbox__control}
              id='agreement'
              name='agreement'
              type='checkbox'
              checked={formData.agreement}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-errormessage='agreement-errors'
            />
            <label
              className={`${s.field__label} ${s.checkbox__label}`}
              htmlFor='agreement'
            >
              Согласен на всё
            </label>
            <FieldErrors errors={errors.agreement} id='agreement-errors' />
          </div>

          <div className={s.formActions}>
            <button type='button' onClick={resetForm}>
              Сбросить
            </button>
            <button type='submit'>Регистрация</button>
          </div>
        </form>

        {/* <h1>тест хука useScrollbarWidth</h1>
        <div>
          <p>Ширина скроллбара: {scrollbarWidth}px</p>
        </div>
        <hr /> */}

        {/* <h1>
          <div>
            {isMobile && <p>Mobile view</p>}
            {isTablet && <p>Tablet view</p>}
            {isDesktop && <p>Desktop view</p>}
          </div>
        </h1>
        <hr /> */}

        {/* <div className='' ref={ref as React.RefObject<HTMLDivElement>}>
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
        <hr /> */}

        {/* <h1>тест хука useLocalStorage</h1>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Enter your name'
        />

        <button
          onClick={() =>
            setUser({
              name: 'denis111',
              age: 27,
              email: 'test@test.com'
            })
          }
        >
          кнопка
        </button>
        <hr /> */}

        {/* <h1>тест useIntersectionObserver</h1>
        <div style={{ height: '100vh' }}>
          Скролл для теста useIntersectionObserver
        </div>
        <div
          ref={targetRef as React.RefObject<HTMLDivElement>}
          style={{
            height: '100vh',
            background: isIntersecting ? 'green' : 'red'
          }}
        >
          {isIntersecting ? 'Visible' : 'Not Visible'}
        </div>
        <hr /> */}

        {/* <h1>тест хука useCopyToClipboard</h1>
        <BaseButton onClick={() => copyToClipboard(textToCopy)}>
          {isCopied ? 'Copied!' : 'Copy to Clipboard'}
        </BaseButton>
        <hr /> */}

        {/* <h1>тест картинок: обычная и ретина</h1>
        <Image
          // src='/unsplash.jpg'
          src=''
          width={741}
          height={1115}
          alt='default'
          quality={100}
          onError={addDefaultImage}
          style={{ background: 'grey' }}
        />

        <Image
          src='/unsplash@2x.jpg'
          width={741}
          height={1115}
          alt='retina'
          quality={100}
        /> */}
      </div>
    </>
  );
};

const FieldErrors: React.FC<{ errors?: string[]; id: string }> = ({
  errors,
  id
}) => {
  if (!errors || errors.length === 0) return null;

  return (
    <span className={s.field__errors} id={id}>
      {errors.map((error, index) => (
        <span key={index} className={s.field__error}>
          {error}
        </span>
      ))}
    </span>
  );
};

export default Home;
