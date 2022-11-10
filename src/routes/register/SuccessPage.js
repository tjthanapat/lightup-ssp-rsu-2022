import React from 'react';

const SuccessPage = (props) => {
  const { student } = props;

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-md my-20 mx-auto p-5">
        <h1 className="text-3xl">ลงทะเบียนสำเร็จ</h1>
        <p className="mt-5">
          {!!student.title ? student.title : '<title>'}
          {!!student.firstName ? student.firstName : '<firstName>'}{' '}
          {!!student.firstName ? student.lastName : '<lastName>'}{' '}
          เลขประจำตัวนักเรียน {!!student.id ? student.id : '<id>'}{' '}
          ได้ทำการลงทะเบียนเรียบร้อยแล้ว
        </p>
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
};

export default SuccessPage;
