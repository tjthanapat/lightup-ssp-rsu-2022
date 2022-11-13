import React from 'react';
import Footer from '../../../components/Footer';
import { getStudentListsByClassroom } from '../../../functions/queryStudents';

import StudentInClassroomList from './StudentInClassroomList';

const StudentListsByClassroom = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-lg my-20 mx-auto p-5">
        <h1 className="text-3xl">รายชื่อนักเรียนตามห้องเรียน</h1>
        <p>
          กิจกรรมเปิดโลกทัศน์ทางการศึกษาและอาชีพ ณ มหาวิทยาลัยรังสิต วันที่ 25
          พฤศจิกายน 2565
        </p>
        <div className="my-10">
          {getStudentListsByClassroom().map((classroom) => (
            <StudentInClassroomList key={classroom.id} classroom={classroom} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default StudentListsByClassroom;
