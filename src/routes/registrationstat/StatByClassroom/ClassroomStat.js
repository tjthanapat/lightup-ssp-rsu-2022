import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';

const ClassroomStat = (props) => {
  const { classroomId, students } = props;
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
        className="p-5 bg-gray-100 rounded-lg flex flex-col justify-between transition duration-500 ease select-none hover:bg-gray-200 hover:cursor-pointer"
      >
        <p>ม.{classroomId}</p>
        <p className="text-right">
          <span className="text-4xl">{students.length}</span>
          <span className="ml-3">คน</span>
        </p>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <div className="p-5">
          <p className="font-nato font-semibold text-lg">
            รายชื่อผู้ลงทะเบียน ม.{classroomId}
          </p>
          <div class="overflow-x-auto my-5">
            <table class="table-auto border-collapse">
              <thead>
                <tr className='bg-gray-100'>
                  <th className="p-2 border border-slate-300">เลขที่</th>
                  <th className="p-2 border border-slate-300">
                    เลขประจำตัวนักเรียน
                  </th>
                  <th className="p-2 border border-slate-300">ชื่อ-นามสกุล</th>
                  <th className="p-2 border border-slate-300">โทรศัพท์</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="p-2 border border-slate-300">
                      {student.roll}
                    </td>
                    <td className="p-2 border border-slate-300">
                      {student.id}
                    </td>
                    <td className="p-2 border border-slate-300">
                      {student.title}
                      {student.firstName} {student.lastName}
                    </td>
                    <td className="p-2 border border-slate-300">
                      {student.phone}
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

export default ClassroomStat;
