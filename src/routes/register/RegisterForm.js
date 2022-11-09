import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ClassroomSelection from './ClassroomSelection';
import BoothSelection from './BoothSelection';
import AgreementCheckbox from './AgreementCheckbox';
import NameTitleSelection from './NameTitleSelection';

const RegisterForm = (props) => {
  const {
    student,
    setStudent,
    selectedBooths,
    setSelectedBooths,
    setLoading,
    setSuccess,
  } = props;

  const [checkedAgreement, setCheckedAgreement] = useState(false);

  const handleChangeStudent = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const setClassroom = (classroom) => {
    setStudent({ ...student, classroom: classroom });
  };

  const setTitle = (title) => {
    setStudent({ ...student, title: title });
  };

  const errorStudentId = (studentId) => {
    if (studentId === '') {
      return false;
    } else {
      return !studentId.match(/\b\d{5}\b/g);
    }
  };
  const errorPhoneNumber = (phone) => {
    if (phone === '') {
      return false;
    } else {
      return !phone.match(/\b\d{10}\b/g);
    }
  };

  const handleClickSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-screen-lg my-20 mx-5">
        <h1 className="text-3xl">ลงทะเบียน</h1>
        <div className="my-5">
          <h2 className="text-2xl mb-3">ข้อมูลทั่วไป</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField
              className="sm:col-span-2"
              name="id"
              value={student.id}
              label="เลขประจำตัวนักเรียน"
              onChange={handleChangeStudent}
              inputProps={{
                maxLength: 5,
                inputMode: 'numeric',
                pattern: '[0-9]{5}',
              }}
              variant="outlined"
              error={errorStudentId(student.id)}
              helperText={
                errorStudentId(student.id)
                  ? 'กรอกเลขประจำตัวนักเรียน 5 หลัก'
                  : ''
              }
            />
            <NameTitleSelection title={student.title} setTitle={setTitle} />
            <TextField
              name="firstName"
              value={student.firstName}
              label="ชื่อภาษาไทย"
              onChange={handleChangeStudent}
              inputProps={{ maxLength: 50 }}
              variant="outlined"
            />
            <TextField
              name="lastName"
              value={student.lastName}
              label="นามสกุลภาษาไทย"
              onChange={handleChangeStudent}
              inputProps={{ maxLength: 50 }}
              variant="outlined"
            />
            <ClassroomSelection
              classroom={student.classroom}
              setClassroom={setClassroom}
            />
            <TextField
              name="roll"
              value={student.roll}
              label="เลขที่"
              onChange={handleChangeStudent}
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
                maxLength: 2,
              }}
              variant="outlined"
            />
            <TextField
              className="sm:col-span-2"
              name="phone"
              value={student.phone}
              label="โทรศัพท์มือถือ"
              onChange={handleChangeStudent}
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]{10}',
                maxLength: 10,
              }}
              error={errorPhoneNumber(student.phone)}
              helperText={
                errorPhoneNumber(student.phone)
                  ? 'กรอกหมายเลขโทรศัพท์ 10 หลัก ไม่ต้องใส่ขีด'
                  : ''
              }
              variant="outlined"
            />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl mb-3">เลือกคณะที่สนใจ 4 คณะ</h2>
          <BoothSelection
            selectedBooths={selectedBooths}
            setSelectedBooths={setSelectedBooths}
          />
        </div>
        <div>
          <AgreementCheckbox
            checked={checkedAgreement}
            setChecked={setCheckedAgreement}
          />
          <button
            onClick={handleClickSubmit}
            type="button"
            className="border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-md w-full my-5 px-4 py-2 transition duration-500 ease select-none disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed"
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
