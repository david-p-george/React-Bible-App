import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, defaultValue, styles, onChangeFunc, focus}) => {
  return (
    <div style={styles}>
      <Select options={options} defaultValue={defaultValue} onChange={onChangeFunc} menuIsOpen={focus} />
    </div>
  )
};

export default CustomSelect;
