import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AgreementCheckbox = (props) => {
  const { checked, setChecked } = props;

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <FormControlLabel
      label="ข้าพเจ้ายืนยันว่าข้อมูลที่กรอกไปข้างต้นถูกต้องและสมบูรณ์ และยินยอมให้เปิดเผยข้อมูลดังกล่าวแก่มหาวิทยาลัยรังสิต เพื่อใช้ในการจัดกิจกรรมเปิดโลกทัศน์ทางการศึกษาและอาชีพ ณ มหาวิทยาลัยรังสิต วันที่ 25 พฤศจิกายน 2565"
      control={<Checkbox checked={checked} onChange={handleChange} />}
    />
  );
};

export default AgreementCheckbox;
