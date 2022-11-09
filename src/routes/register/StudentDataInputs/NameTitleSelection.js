import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const NameTitleSelection = (props) => {
  const { title, setStudentData, className } = props;

  const handleChange = (event) => {
    setStudentData('title', event.target.value);
  };

  return (
    <FormControl fullWidth required className={className}>
      <InputLabel>คำนำหน้าชื่อ</InputLabel>
      <Select value={title} label="คำนำหน้าชื่อ" onChange={handleChange}>
        <MenuItem value="นางสาว">นางสาว</MenuItem>
        <MenuItem value="นาย">นาย</MenuItem>
      </Select>
    </FormControl>
  );
};

export default NameTitleSelection;
