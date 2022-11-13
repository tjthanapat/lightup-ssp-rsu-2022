import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandIcon from '../../../components/ExpandIcon';
import { getBoothNameById } from '../../../functions/booth';

const StudentInClassroomList = (props) => {
  const { classroom } = props;
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandIcon />}>
        <h6 className="text-lg">{classroom.name} ({classroom.students.length} คน)</h6>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border border-slate-300 w-12">เลขที่</th>
                  <th className="p-2 border border-slate-300 w-24">
                    เลขประจำตัวนักเรียน
                  </th>
                  <th className="p-2 border border-slate-300 w-48">
                    ชื่อ-นามสกุล
                  </th>
                  <th className="p-2 border border-slate-300">รอบ 1</th>
                  <th className="p-2 border border-slate-300">รอบ 2</th>
                  <th className="p-2 border border-slate-300">รอบ 3</th>
                  <th className="p-2 border border-slate-300">รอบ 4</th>
                </tr>
              </thead>
              <tbody>
                {classroom.students.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-100">
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
                      {getBoothNameById(student.allocated_booths[0])}
                    </td>
                    <td className="p-2 border border-slate-300">
                      {getBoothNameById(student.allocated_booths[1])}
                    </td>
                    <td className="p-2 border border-slate-300">
                      {getBoothNameById(student.allocated_booths[2])}
                    </td>
                    <td className="p-2 border border-slate-300">
                      {getBoothNameById(student.allocated_booths[3])}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default StudentInClassroomList;
