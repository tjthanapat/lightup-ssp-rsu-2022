import React, { useEffect, useState } from 'react';
import LoadingPage from './LoadingPage';
import RegisterForm from './RegisterForm';
import SuccessPage from './SuccessPage';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [student, setStudent] = useState({
    title:'',
    firstName: '',
    lastName: '',
    id: '',
    roll: '',
    phone: '',
    classroom: '',
  });
  const [selectedBooths, setSelectedBooths] = useState([]);

  useEffect(() => {
    console.log(student);
  }, [student]);

  if (success) {
    return <SuccessPage student={student} />;
  } else if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <RegisterForm
        student={student}
        setStudent={setStudent}
        selectedBooths={selectedBooths}
        setSelectedBooths={setSelectedBooths}
        setLoading={setLoading}
        setSuccess={setSuccess}
      />
    );
  }
};

export default Register;
