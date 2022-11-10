import React, { useEffect, useState } from 'react';
import { getStudentsByClassroom } from '../../../functions/registrationStat';

const StatByClassroom = (props) => {
  const { students } = props;
  const [studentsByClassroom, setStudentsByClassroom] = useState([]);
  useEffect(() => {
    setStudentsByClassroom(getStudentsByClassroom(students));
  },[]);
  return (
    <div className='my-10'>
      <h2 className="text-lg">ผู้ลงทะเบียนตามห้องเรียน</h2>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {studentsByClassroom.map((classroom) => (
          <div
            key={classroom.classroomId}
            className="p-5 bg-gray-100 rounded-lg flex flex-col justify-between"
          >
            <p>ม.{classroom.classroomId}</p>
            <p className="text-right">
              <span className="text-4xl">{classroom.students.length}</span>
              <span className="ml-3">คน</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatByClassroom;
