import React from 'react';
import ClassroomSelection from './ClassroomSelection';
import NameTitleSelection from './NameTitleSelection';
import TextInput from './TextInput';

const StudentDataInputs = (props) => {
  const { student, setStudent } = props;

  const setStudentData = (key, value) => {
    setStudent({ ...student, [key]: value });
  };

  return (
    <div className="grid sm:grid-cols-8 gap-3">
      <TextInput
        name="id"
        value={student.id}
        label="เลขประจำตัวนักเรียน"
        setStudentData={setStudentData}
        inputProps={{
          maxLength: 5,
          inputMode: 'numeric',
        }}
        regexCheck={"^[0-9]{5}$"}
        helperText="กรอกเลขประจำตัวนักเรียน 5 หลัก"
        className="sm:col-span-8"
      />
      <NameTitleSelection
        title={student.title}
        setStudentData={setStudentData}
        className="sm:col-span-2"
      />
      <TextInput
        required
        name="firstName"
        value={student.firstName}
        label="ชื่อภาษาไทย"
        setStudentData={setStudentData}
        inputProps={{ maxLength: 50 }}
        regexCheck={"^[\u0E00-\u0E7F .]{1,50}$"}
        helperText="กรอกชื่อภาษาไทย"
        className="sm:col-span-3"
      />
      <TextInput
        required
        name="lastName"
        value={student.lastName}
        label="นามสกุลภาษาไทย"
        setStudentData={setStudentData}
        inputProps={{ maxLength: 50 }}
        regexCheck={"^[\u0E00-\u0E7F .]{1,50}$"}
        helperText="กรอกนามสกุลภาษาไทย"
        className="sm:col-span-3"
      />
      <ClassroomSelection
        classroom={student.classroom}
        setStudentData={setStudentData}
        className="sm:col-span-4"
      />
      <TextInput
        required
        name="roll"
        value={student.roll}
        label="เลขที่"
        setStudentData={setStudentData}
        inputProps={{
          maxLength: 2,
          inputMode: 'numeric',
        }}
        regexCheck={"^[0-9]{1,2}$"}
        helperText="กรอกเลขที่"
        className="sm:col-span-4"
      />
      <TextInput
        required
        name="phone"
        value={student.phone}
        label="โทรศัพท์มือถือ"
        setStudentData={setStudentData}
        inputProps={{
          maxLength: 10,
          inputMode: 'numeric',
        }}
        regexCheck={"^[0]{1}[0-9]{9}$"}
        helperText="กรอกหมายเลขโทรศัพท์ 10 หลัก ไม่ต้องใส่ขีด"
        className="sm:col-span-8"
      />
    </div>
  );
};

export default StudentDataInputs;
