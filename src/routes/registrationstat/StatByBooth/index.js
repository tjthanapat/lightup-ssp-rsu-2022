import React, { useEffect, useState } from 'react';
import { getStudentsByBooth } from '../../../functions/registrationStat';

const StatByBooth = (props) => {
  const { students } = props;
  const [studentsByBooth, setStudentsByBooth] = useState([]);
  useEffect(() => {
    setStudentsByBooth(getStudentsByBooth(students));
  }, []);
  return (
    <div>
      <h2 className="text-lg">ผู้ลงทะเบียนตามคณะที่เลือก</h2>
      <div className="divide-y">
        {studentsByBooth.map((group) => (
          <div key={group.boothGroupId} className="py-5">
            <p>{group.boothGroupName}</p>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {group.booths.map((booth) => (
                <div
                  key={booth.boothId}
                  className="p-5 bg-gray-100 rounded-lg flex flex-col justify-between"
                >
                  <p>{booth.boothName}</p>
                  <p className="text-right">
                    <span className="text-4xl">{booth.students.length}</span>
                    <span className="ml-3">คน</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatByBooth;
