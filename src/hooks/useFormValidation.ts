import { useState, useCallback, ChangeEvent } from 'react';

type FormFieldValue = string | number | boolean | null | undefined;
type FormData = Record<string, FormFieldValue>;

type ValidationRule<T extends FormFieldValue, F extends FormData> = {
  required?: boolean;
  minLength?: T extends string ? number : never;
  maxLength?: T extends string ? number : never;
  pattern?: T extends string ? RegExp : never;
  min?: T extends number ? number : never;
  max?: T extends number ? number : never;
  validate?: (value: T, formData: F) => string | boolean;
};

type ValidationRules<F extends FormData> = {
  [K in keyof F]?: ValidationRule<F[K], F>;
};

type FormErrors<F extends FormData> = {
  [K in keyof F]?: string[];
};

const defaultErrorMessages = {
  valueMissing: () => 'Пожалуйста, заполните это поле',
  patternMismatch: () => 'Данные не соответствуют формату',
  tooShort: (minLength: number) =>
    `Слишком короткое значение, минимум символов — ${minLength}`,
  tooLong: (maxLength: number) =>
    `Слишком длинное значение, ограничение символов — ${maxLength}`,
  rangeUnderflow: (min: number) => `Значение должно быть не меньше ${min}`,
  rangeOverflow: (max: number) => `Значение должно быть не больше ${max}`,
  customError: (message: string) => message
};

export const useFormValidation = <F extends FormData>(
  initialValues: F,
  validationRules: ValidationRules<F> = {}
) => {
  const [formData, setFormData] = useState<F>(initialValues);
  const [errors, setErrors] = useState<FormErrors<F>>({});

  const validateField = useCallback(
    <K extends keyof F>(name: K, value: F[K], customFormData?: F): string[] => {
      const rules = validationRules[name];
      if (!rules) return [];

      const currentFormData = customFormData || formData;
      const fieldErrors: string[] = [];

      // 1. Проверка на обязательность (первичная проверка)
      if (rules.required) {
        const isEmpty =
          value === null ||
          value === undefined ||
          value === '' ||
          (typeof value === 'boolean' && !value);

        if (isEmpty) {
          fieldErrors.push(defaultErrorMessages.valueMissing());
          return fieldErrors; // Возвращаем только эту ошибку для пустых полей
        }
      }

      // 2. Проверки для заполненных полей
      if (value !== null && value !== undefined && value !== '') {
        // Проверки для строковых значений
        if (typeof value === 'string') {
          if (rules.minLength && value.length < rules.minLength) {
            fieldErrors.push(defaultErrorMessages.tooShort(rules.minLength));
          }

          if (rules.maxLength && value.length > rules.maxLength) {
            fieldErrors.push(defaultErrorMessages.tooLong(rules.maxLength));
          }

          if (rules.pattern && !rules.pattern.test(value)) {
            fieldErrors.push(defaultErrorMessages.patternMismatch());
          }
        }

        // Проверки для числовых значений
        if (typeof value === 'number') {
          if (rules.min && value < rules.min) {
            fieldErrors.push(defaultErrorMessages.rangeUnderflow(rules.min));
          }

          if (rules.max && value > rules.max) {
            fieldErrors.push(defaultErrorMessages.rangeOverflow(rules.max));
          }
        }
      }

      // 3. Кастомная валидация (не выполняется для пустых обязательных полей)
      if (rules.validate && !(rules.required && !value)) {
        const validationResult = rules.validate(value, currentFormData);
        if (validationResult !== true) {
          fieldErrors.push(
            defaultErrorMessages.customError(
              typeof validationResult === 'string'
                ? validationResult
                : 'Неверное значение'
            )
          );
        }
      }

      return fieldErrors;
    },
    [validationRules, formData]
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors<F> = {};
    let isValid = true;

    (Object.keys(validationRules) as Array<keyof F>).forEach(key => {
      const fieldErrors = validateField(key, formData[key]);
      if (fieldErrors.length > 0) {
        isValid = false;
        newErrors[key] = fieldErrors;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField, validationRules]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const target = e.target as HTMLInputElement;
      const { name, type } = target;
      const value = type === 'checkbox' ? target.checked : target.value;

      setFormData(prev => {
        const newData = {
          ...prev,
          [name]: value
        };

        // Валидация зависимых полей (например, подтверждение пароля)
        if (name === 'password' && prev.passwordConfirm) {
          const confirmErrors = validateField(
            'passwordConfirm' as keyof F,
            prev.passwordConfirm as F[keyof F],
            newData
          );
          setErrors(prevErrors => ({
            ...prevErrors,
            passwordConfirm:
              confirmErrors.length > 0 ? confirmErrors : undefined
          }));
        }

        return newData;
      });

      // Немедленная валидация для чекбоксов и радио
      if (['checkbox', 'radio'].includes(type)) {
        const fieldErrors = validateField(name as keyof F, value as F[keyof F]);
        setErrors(prev => ({
          ...prev,
          [name]: fieldErrors.length > 0 ? fieldErrors : undefined
        }));
      }
    },
    [validateField]
  );

  const handleBlur = useCallback(
    (
      e: React.FocusEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const target = e.target as HTMLInputElement;
      const { name, type } = target;
      const value = type === 'checkbox' ? target.checked : target.value;

      if (validationRules[name as keyof F]?.required) {
        const fieldErrors = validateField(name as keyof F, value as F[keyof F]);
        setErrors(prev => ({
          ...prev,
          [name]: fieldErrors.length > 0 ? fieldErrors : undefined
        }));
      }
    },
    [validateField, validationRules]
  );

  const resetForm = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setFormData,
    setErrors
  };
};
