import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import BoothSelection from './BoothSelection';
import AgreementCheckbox from './AgreementCheckbox';
import StudentDataInputs from './StudentDataInputs';
import { register } from '../../functions/register';

const validateStudentData = (student) => {
  const id = student.id.match('^[0-9]{5}$');
  const title = student.title !== '';
  const firstName = student.firstName.match('^[\u0E00-\u0E7F .]{1,50}$');
  const lastName = student.lastName.match('^[\u0E00-\u0E7F .]{1,50}$');
  const classroom = student.classroom !== '';
  const roll = student.roll.match('^[0-9]{1,2}$');
  const phone = student.phone.match('^[0]{1}[0-9]{9}$');

  if (id && title && firstName && lastName && classroom && roll && phone) {
    return true;
  } else {
    return false;
  }
};

const RegisterForm = (props) => {
  const {
    student,
    setStudent,
    selectedBooths,
    setSelectedBooths,
    setLoading,
    setError,
    setSuccess,
  } = props;

  const [checkedAgreement, setCheckedAgreement] = useState(false);
  const [allowedSubmit, setAllowedSubmit] = useState(false);

  const handleClickSubmit = async () => {
    try {
      setLoading(true);
      const { id, title, firstName, lastName, classroom, roll, phone } =
        student;
      const studentData = {
        id,
        title,
        firstName,
        lastName,
        classroom,
        roll: parseInt(roll),
        phone,
      };
      await register(studentData, selectedBooths);
      setSuccess(true);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (
      selectedBooths.length === 4 &&
      validateStudentData(student) &&
      checkedAgreement
    ) {
      setAllowedSubmit(true);
    } else {
      setAllowedSubmit(false);
    }
  }, [student, selectedBooths, checkedAgreement]);

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-md my-20 mx-auto p-5">
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
        <div className="mt-10">
          <AgreementCheckbox
            checked={checkedAgreement}
            setChecked={setCheckedAgreement}
          />
          <div className="mt-8">
            <button
              onClick={handleClickSubmit}
              type="button"
              className="border border-teal-500 bg-teal-500 hover:bg-teal-600 text-white rounded-md px-8 py-2 transition duration-500 ease select-none disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed"
              disabled={!allowedSubmit}
            >
              ลงทะเบียน
            </button>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default RegisterForm;
