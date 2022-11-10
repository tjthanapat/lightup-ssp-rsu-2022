import React, { useEffect, useState } from 'react';
import { getStudentsByClassroom } from '../../../functions/registrationStat';
import ClassroomStat from './ClassroomStat';

const StatByClassroom = (props) => {
  const { students } = props;
  const [studentsByClassroom, setStudentsByClassroom] = useState([]);
  useEffect(() => {
    setStudentsByClassroom(getStudentsByClassroom(students));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-lg">ผู้ลงทะเบียนตามห้องเรียน</h2>
      <p>สามารถกดที่ห้องเรียนที่ต้องการเพื่อดูรายชื่อ</p>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {studentsByClassroom.map((classroom) => (
          <ClassroomStat
            key={classroom.classroomId}
            classroomId={classroom.classroomId}
            students={classroom.students}
          />
        ))}
      </div>
    </div>
  );
};

export default StatByClassroom;
