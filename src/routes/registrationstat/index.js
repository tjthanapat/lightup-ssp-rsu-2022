import React, { useEffect, useState } from 'react';
import ErrorPage from '../../components/ErrorPage';
import LoadingPage from '../../components/LoadingPage';

import { getStudents } from '../../functions/registrationStat';
import StatByBooth from './StatByBooth';
import StatByClassroom from './StatByClassroom';

const RegistrationStat = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudents();
        console.log(data);
        setStudents(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (!!error) {
    return <ErrorPage error={error} />;
  } else if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <div className="min-h-screen">
        <div className="max-w-screen-lg my-20 mx-auto p-5">
          <h1 className="text-3xl">Registration Stat</h1>
          <div className="my-10 p-5 bg-gray-100 rounded-lg">
            <p>ผู้ลงทะเบียนทั้งหมด</p>
            <p className="text-right">
              <span className="text-6xl">{students.length}</span>
              <span className="ml-3">คน</span>
            </p>
          </div>
          <StatByClassroom students={students} />
          <StatByBooth students={students} />
          <footer className="mt-12">
            <p className="text-sm text-gray-500">
              Created by{' '}
              <a
                href="https://github.com/tjthanapat"
                target={'_blank'}
                rel="noreferrer"
              >
                tjthanapat
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
};

export default RegistrationStat;
