import { db } from './../firebase';
import { collection, query, getDocs } from 'firebase/firestore';

const boothGroups = require('../constants/booths.json');
const classrooms = require('../constants/classrooms.json');

export const getStudents = async () => {
  try {
    const q = query(collection(db, 'students'));
    const querySnapshot = await getDocs(q);
    let students = [];
    querySnapshot.forEach((doc) => {
      students.push(doc.data());
    });
    return students;
  } catch (err) {
    throw err;
  }
};

export const getStudentsByClassroom = (students) => {
  let studentsByClassroom = [];
  classrooms.forEach((classroom) => {
    const studentsInClassroom = students.filter(
      (student) => student.classroom === classroom.id
    );
    studentsByClassroom.push({
      classroomId: classroom.id,
      classroomName: classroom.name,
      students: studentsInClassroom,
    });
  });
  return studentsByClassroom;
};

export const getStudentsByBooth = (students) => {
  let studentsByBooth = [];
  boothGroups.forEach((boothGroup) => {
    let studentsInBoothGroup = {
      boothGroupId: boothGroup.id,
      boothGroupName: boothGroup.name,
      booths: [],
    };
    boothGroup.booths.forEach((booth) => {
      const studentsInBooth = students.filter((student) =>
        student.selectedBooths.includes(booth.id)
      );
      studentsInBoothGroup.booths.push({
        boothId: booth.id,
        boothName: booth.name,
        students: studentsInBooth,
      });
    });
    studentsByBooth.push(studentsInBoothGroup);
  });
  return studentsByBooth;
};
