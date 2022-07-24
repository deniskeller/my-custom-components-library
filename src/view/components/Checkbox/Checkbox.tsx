import React from 'react';
import { BaseCheckbox, BaseContainer, BaseTitle } from '@base/index';
import styles from './Checkbox.module.scss';
import { LinkToViewCode } from '@nav/index';

interface Props {}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const Checkbox: React.FC<Props> = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  return (
    <div className={styles.Checkboxs}>
      <BaseContainer>
        <BaseTitle className="Mb20">Checkbox</BaseTitle>

        <div className="Headline Mb20">
          <LinkToViewCode title="Checkbox component." href="" />
        </div>

        <BaseCheckbox checkboxValue={isChecked} onClick={setIsChecked}>
          Checkbox
        </BaseCheckbox>
      </BaseContainer>
    </div>
  );
};

export default Checkbox;
