import React from 'react';

const SuccessPage = (props) => {
  const { student } = props;
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-screen-lg my-20 mx-5">
        <h1 className="text-3xl text-center">ลงทะเบียนสำเร็จ</h1>
        <p>
          {student.title ? !!student.title : '<title>'}
          {student.firstName ? !!student.firstName : '<firstName>'}{' '}
          {student.lastName ? !!student.firstName : '<lastName>'}{' '}
          เลขประจำตัวนักเรียน {student.id ? !!student.id : '<id>'}{' '}
          ได้ทำการลงทะเบียนเรียบร้อยแล้ว
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
