import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';

const StudentInBoothRoundList = (props) => {
  const { boothName, boothId, roundNum, studentsInBoothRound } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={handleClickOpen}
        className="p-5 rounded-lg text-center transition duration-500 ease select-none hover:bg-gray-100 hover:cursor-pointer"
      >
        <p className="text-xl font-nato">รอบ {roundNum}</p>
        <p>{studentsInBoothRound.length} คน</p>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <div className="p-5">
          <p className="font-nato font-semibold text-lg">
            รายชื่อนักเรียน {boothName} รอบ {roundNum}
          </p>
          <div className="overflow-x-auto my-5">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border border-slate-300">
                    เลขประจำตัวนักเรียน
                  </th>
                  <th className="p-2 border border-slate-300">ชื่อ-นามสกุล</th>
                  <th className="p-2 border border-slate-300">ชั้น</th>
                  <th className="p-2 border border-slate-300">เลขที่</th>
                </tr>
              </thead>
              <tbody>
                {studentsInBoothRound.map((student) => (
                  <tr
                    key={`${boothId}-${student.id}`}
                    className="hover:bg-slate-100"
                  >
                    <td className="p-2 border border-slate-300">
                      {student.id}
                    </td>
                    <td className="p-2 border border-slate-300">
                      {student.title}
                      {student.firstName} {student.lastName}
                    </td>
                    <td className="p-2 border border-slate-300">
                      {student.classroom}
                    </td>
                    <td className="p-2 border border-slate-300">
                      {student.roll}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={handleClose}
            type="button"
            className="border border-teal-500 bg-teal-500 hover:bg-teal-600 text-white rounded-md px-8 py-1 transition duration-500 ease select-none"
          >
            ปิด
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default StudentInBoothRoundList;
