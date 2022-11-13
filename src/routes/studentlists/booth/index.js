import React from 'react';
import Footer from '../../../components/Footer';
import { getStudentListsByBooth } from '../../../functions/queryStudents';
import StudentInBoothAccordion from './StudentInBoothAccordion';

const StudentListsByBooth = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-lg my-20 mx-auto p-5">
        <h1 className="text-3xl">รายชื่อนักเรียนตามคณะที่เลือก</h1>
        <p>
          กิจกรรมเปิดโลกทัศน์ทางการศึกษาและอาชีพ ณ มหาวิทยาลัยรังสิต วันที่ 25
          พฤศจิกายน 2565
        </p>
        <div className="divide-y">
          {getStudentListsByBooth().map((boothGroup) => (
            <div key={boothGroup.boothGroupId} className="py-10">
              <h2 className="text-xl mb-5">{boothGroup.boothGroupName}</h2>
              {boothGroup.booths.map((booth) => (
                <StudentInBoothAccordion key={booth.boothId} booth={booth} />
              ))}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default StudentListsByBooth;
