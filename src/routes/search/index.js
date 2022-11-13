import React, { useState } from 'react';
import Footer from '../../components/Footer';
import TextField from '@mui/material/TextField';
import { getStudentById } from '../../functions/queryStudents';
import { getBoothNameById } from '../../functions/booth';

const StudentSearch = () => {
  const [student, setStudent] = useState(null);
  const [clickedFirstSearch, setClickedFirstSearch] = useState(false);
  const [searchStudentId, setSearchStudentId] = useState('');
  const handleChange = (event) => {
    setSearchStudentId(event.target.value);
  };
  const handleSubmitSearch = (event) => {
    event.preventDefault()
    setClickedFirstSearch(true);
    setStudent(getStudentById(searchStudentId));
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-lg my-20 mx-auto p-5">
        <h1 className="text-3xl">ค้นหาข้อมูลผู้ลงทะเบียน</h1>
        <p>
          กิจกรรมเปิดโลกทัศน์ทางการศึกษาและอาชีพ ณ มหาวิทยาลัยรังสิต วันที่ 25
          พฤศจิกายน 2565
        </p>
        <div className="my-10 ">
          <p className='mb-3'>ระบุเลขประจำตัวนักเรียนของผู้ลงทะเบียนที่ต้องการค้นหา</p>
          <form className="flex" onSubmit={handleSubmitSearch}>
            <TextField
              name="searchStudentId"
              value={searchStudentId}
              label="เลขประจำตัวนักเรียน"
              onChange={handleChange}
              inputProps={{
                maxLength: 5,
                inputMode: 'numeric',
              }}
              variant="outlined"
              fullWidth
            />
            <button
              type="submit"
              className="border border-teal-500 bg-teal-500 hover:bg-teal-600 text-white rounded-r-md px-8 py-2 transition duration-500 ease select-none disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed"
            >
              ค้นหา
            </button>
          </form>

          {!!student && (
            <div className="mt-8">
              <p className="font-nato text-xl font-semibold">
                {student.title}
                {student.firstName} {student.lastName}
              </p>
              <p>เลขประจำตัวนักเรียน {student.id}</p>
              <p>
                ชั้น ม.{student.classroom} เลขที่ {student.roll}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                {student.allocated_booths.map((booth, index) => (
                  <div
                    key={`R${index + 1}`}
                    className="p-5 rounded-lg text-center bg-gray-100"
                  >
                    <p className="text-xl font-nato">รอบ {index + 1}</p>
                    <p>{getBoothNameById(booth)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!!!student && clickedFirstSearch && (
            <p className="mt-8">ไม่พบข้อมูล</p>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default StudentSearch;
