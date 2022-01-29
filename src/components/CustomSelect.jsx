import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, defaultValue, styles, onChangeFunc }) => {
  // let options = [
  //   {label: 'Matthew', value: 'matthew'},
  //   {label: 'Mark', value: 'mark'},
  //   {label: 'Luke', value: 'luke'},
  //   {label: 'John', value: 'john'}
  // ]

  return (
    <div style={styles}>
      <Select options={options} defaultValue={defaultValue} onChange={onChangeFunc} />
    </div>
  )
};

export default CustomSelect;
