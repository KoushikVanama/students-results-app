import React from 'react';
import Select from 'react-select';

const SelectBox = ({input, options, placeholder, disabled,
  defaultValue, meta: {touched, error}}) => {
  return(
    <Select 
      {...input}
      options={options}
      placeholder={placeholder}
      isDisabled={disabled}
      onChange={input.onChange}
      defaultValue={defaultValue}
      onBlur={event => event.preventDefault()}
      value={(input.value) ? input.value : defaultValue}
    />
  );
}

export default SelectBox;
