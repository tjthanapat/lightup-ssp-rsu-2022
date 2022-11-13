const students = require('./../constants/allocated_students.json');
const classrooms = require('./../constants/classrooms.json');
const boothGroups = require('./../constants/booths.json');

export const getStudentListsByClassroom = () => {
  let studentLists = [];
  for (let i = 0; i < classrooms.length; i++) {
    const classroom = classrooms[i];
    const studentsInClassroom = students.filter(
      (student) => student.classroom === classroom.id
    );
    studentsInClassroom.sort((a, b) => a.roll - b.roll);
    studentLists.push({
      id: classroom.id,
      name: classroom.name,
      students: studentsInClassroom,
    });
  }
  return studentLists;
};

export const getStudentListsByBooth = () => {
  let studentLists = [];
  boothGroups.forEach((boothGroup) => {
    let studentsInBoothGroup = {
      boothGroupId: boothGroup.id,
      boothGroupName: boothGroup.name,
      booths: [],
    };
    boothGroup.booths.forEach((booth) => {
      let studentsInBoothRounds = [];
      let totalStudents = 0;
      for (let i = 0; i < 4; i++) {
        const studentsInBoothRound = students.filter(
          (student) => student.allocated_booths[i] === booth.id
        );
        studentsInBoothRound.sort(
          (a, b) =>
            parseInt(a.classroom.split('/')[1]) -
              parseInt(b.classroom.split('/')[1]) || a.roll - b.roll
        );
        studentsInBoothRounds.push(studentsInBoothRound);
        totalStudents += studentsInBoothRound.length;
      }
      studentsInBoothGroup.booths.push({
        boothId: booth.id,
        boothName: booth.name,
        studentsInRound: studentsInBoothRounds,
        totalStudents: totalStudents,
      });
    });
    studentLists.push(studentsInBoothGroup);
  });
  return studentLists;
};

export const getStudentById = (studentId) => {
  const student = students.find((student) => student.id === studentId);
  return student;
};
