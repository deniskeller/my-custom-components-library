import React from 'react';
import {
  BaseButton,
  BaseButton2,
  BaseCheckbox,
  BaseContainer,
  BaseSubtitle,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './Checkbox.module.scss';
import { LinkToViewCode } from '@nav/index';

interface Props {}

interface IValue {
  [key: string]: boolean;
}

interface ICat {
  id: number;
  name: string;
  checked: boolean;
}

const cats: ICat[] = [
  { id: 1, name: 'Norwegian Forest Cat', checked: true },
  { id: 2, name: 'Maine Coon', checked: false },
  { id: 3, name: 'Munchkin', checked: false },
];

const Checkbox: React.FC<Props> = () => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<IValue>({
    isChecked1: false,
    isChecked2: true,
  });

  const setNewValue = (key: string) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[key] = !prevState[key];
      return newState;
    });
  };

  //for Checkbox groups
  const [checkedAll, setCheckedAll] = React.useState<boolean>(false);
  const [selectAllCats, setSelectAllCats] = React.useState<ICat[]>(cats);

  const selectAll = (value: boolean) => {
    setCheckedAll(value);
    setSelectAllCats((prevState) => {
      const arr = prevState.map((obj) => ({ ...obj, checked: value }));
      return arr;
    });
  };

  React.useEffect(() => {
    let allChecked = true;
    selectAllCats.forEach((el) => {
      if (el.checked === false) {
        allChecked = false;
      }
    });

    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [selectAllCats]);

  return (
    <>
      <BaseContainer className="Mb20">
        <BaseText className="Mb20">Checkbox</BaseText>

        <div className="Headline Mb20">
          <LinkToViewCode
            title="Checkbox component."
            href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseCheckbox"
          />
        </div>

        <div className={styles.Checkboxs}>
          <div className="df Mb20">
            <BaseCheckbox
              checked={checked.isChecked1}
              onChange={() => setNewValue('isChecked1')}
              disabled={isDisabled}
              className="Mr20"
            />
            <BaseButton2
              title="Toggle disabled"
              className="mw300"
              onClick={() => setIsDisabled(!isDisabled)}
            />
          </div>

          <BaseCheckbox
            checked={checked.isChecked2}
            onChange={() => setNewValue('isChecked2')}
            className="Mb20"
          >
            Checkbox with label
          </BaseCheckbox>
        </div>
      </BaseContainer>

      <BaseContainer>
        <BaseText className="Mb20">Checkbox groups</BaseText>

        <div className={styles.Checkboxs}>
          <BaseCheckbox
            checked={checkedAll}
            onChange={() => selectAll(!checkedAll)}
            className="Mb20"
          >
            Select all
          </BaseCheckbox>
          {selectAllCats?.map((cat) => {
            return (
              <BaseCheckbox
                key={cat.id}
                id={cat.id.toString()}
                checked={cat.checked}
                onChange={() => {
                  cat.checked = !cat.checked;
                  setSelectAllCats([...selectAllCats]);
                }}
                className="Mb20"
              >
                {cat.name}
              </BaseCheckbox>
            );
          })}
        </div>
      </BaseContainer>
    </>
  );
};

export default Checkbox;
