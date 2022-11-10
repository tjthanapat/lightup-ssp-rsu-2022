import { db } from './../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const validateStudentId = async (studentId) => {
  try {
    const docRef = doc(db, 'students', studentId);
    const docSnap = await getDoc(docRef);
    return !docSnap.exists();
  } catch (err) {
    throw err;
  }
};

const register = async (student, selectedBooths) => {
  try {
    const isStudentIdAvailable = await validateStudentId(student.id);
    if (!isStudentIdAvailable) {
      const err = {
        name: 'StudentIdValidationError',
        message: `เลขประจำตัวนักเรียน ${student.id} ถูกใช้ลงทะเบียนไปแล้ว หากนี่เป็นเลขประจำตัวนักเรียนของคุณ โปรดติดต่อผู้ดูแลระบบ`,
      };
      throw err;
    } else {
      const docRef = doc(db, 'students', student.id);
      const data = {
        ...student,
        selectedBooths,
      };
      await setDoc(docRef, data);
    }
  } catch (err) {
    throw err;
  }
};

export { register };
