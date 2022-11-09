import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = (props) => {
  const {
    className,
    name,
    value,
    label,
    setStudentData,
    inputProps,
    regexCheck,
    helperText,
  } = props;
  
  const handleChange = (event) => {
    setStudentData(name, event.target.value);
  };
  const isError = (value) => {
    if (value === '') {
      return false;
    } else {
      return !value.match(regexCheck);
    }
  };
  return (
    <TextField
      required
      name={name}
      value={value}
      label={label}
      onChange={handleChange}
      inputProps={inputProps}
      variant="outlined"
      className={className}
      error={isError(value)}
      helperText={isError(value) ? helperText : ''}
    />
  );
};

export default TextInput;
