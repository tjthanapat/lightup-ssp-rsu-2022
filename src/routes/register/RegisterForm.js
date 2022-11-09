import React, { useState,useEffect } from 'react';
import BoothSelection from './BoothSelection';
import AgreementCheckbox from './AgreementCheckbox';
import StudentDataInputs from './StudentDataInputs';

const validateStudentData = (student) => {
  const id = student.id.match("^[0-9]{5}$")
  const title = student.title !== ''
  const firstName = student.firstName.match("^[\u0E00-\u0E7F .]{1,50}$")
  const lastName = student.lastName.match("^[\u0E00-\u0E7F .]{1,50}$")
  const classroom = student.classroom !== ''
  const roll = student.roll.match("^[0-9]{1,2}$")
  const phone = student.phone.match("^[0]{1}[0-9]{9}$")

  if (id && title && firstName && lastName && classroom && roll && phone) {
    return true
  } else {
    return false
  }
}

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
  const [allowedSubmit, setAllowedSubmit] = useState(false);

  const handleClickSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
    }, 1000);
  };

  useEffect(()=>{
    if(selectedBooths.length==4 && validateStudentData(student) && checkedAgreement){
      setAllowedSubmit(true)
    } else {
      setAllowedSubmit(false)
    }
  },[student,selectedBooths,checkedAgreement])

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-screen-lg my-20 mx-5">
        <h1 className="text-3xl">ลงทะเบียน</h1>
        <div className="my-5">
          <h2 className="text-2xl mb-3">ข้อมูลทั่วไป</h2>
          <StudentDataInputs student={student} setStudent={setStudent} />
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
            disabled={!allowedSubmit}
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
