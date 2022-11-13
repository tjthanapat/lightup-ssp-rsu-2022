import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandIcon from '../../../components/ExpandIcon';
import StudentInBoothRoundList from './StudentInBoothRound';

const StudentInBoothAccordion = (props) => {
  const { booth } = props;
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandIcon />}>
        <h6 className="text-lg">
          {booth.boothName} ({booth.totalStudents} คน)
        </h6>
      </AccordionSummary>
      <AccordionDetails>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {booth.studentsInRound.map((round, index) => (
            <StudentInBoothRoundList
              key={`${booth.boothId}-${index+1}`}
              boothId={booth.boothId}
              boothName={booth.boothName}
              studentsInBoothRound={round}
              roundNum={index+1}
            />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default StudentInBoothAccordion;
