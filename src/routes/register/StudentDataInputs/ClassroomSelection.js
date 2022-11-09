import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const classrooms = require('./../../../constants/classrooms.json');

const ClassroomSelection = (props) => {
  const { classroom, setStudentData, className } = props;

  const handleChange = (event) => {
    setStudentData('classroom', event.target.value);
  };

  return (
    <FormControl fullWidth required className={className}>
      <InputLabel>ชั้นเรียน</InputLabel>
      <Select value={classroom} label="ชั้นเรียน" onChange={handleChange}>
        {classrooms.map((classroom) => {
          return (
            <MenuItem key={classroom.id} value={classroom.id}>
              {classroom.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ClassroomSelection;
