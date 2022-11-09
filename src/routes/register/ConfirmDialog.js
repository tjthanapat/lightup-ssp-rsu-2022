import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const booth_groups = require('./../../constants/booths.json');

const getBoothNameById = (id) => {
  let booth = null;
  for (let i = 0; i < booth_groups.length; i++) {
    const booth_group = booth_groups[i];
    booth = booth_group.booths.find((booth) => booth.id === id);
    if (!!booth) {
      break;
    }
  }
  if (!!booth) {
    return booth.name;
  } else {
    const err = `There is no booth name with id ${id}`;
    throw err;
  }
};

const ConfirmDialog = (props) => {
  const { open, setOpen, onConfirm, selectedBooths } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
  };

  useEffect(() => {
    for (let i = 0; i < booth_groups.length; i++) {
      const booth_group = booth_groups[i];
      console.log(booth_group);
    }
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>ตรวจสอบอีกครั้ง</DialogTitle>
      <DialogContent>
        <p>4 คณะที่คุณเลือก ได้แก่</p>
        <ul>
          {selectedBooths.map((boothId) => (
            <li key={boothId}>- {getBoothNameById(boothId)}</li>
          ))}
        </ul>
        <p className="text-sm mt-5">
          หมายเหตุ : การเรียงลำดับข้างต้นไม่มีผลต่อการจัดรอบ
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>กลับไปแก้ไข</Button>
        <Button onClick={handleConfirm}>ยืนยัน</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
