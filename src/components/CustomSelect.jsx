import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, defaultValue, styles, onChangeFunc, menuOnOrOff }) => {
  return (
    <div style={styles}>
      <Select options={options} defaultValue={defaultValue} onChange={onChangeFunc} menuIsOpen={menuOnOrOff} />
    </div>
  )
};

export default CustomSelect;
