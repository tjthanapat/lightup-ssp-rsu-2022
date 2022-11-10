import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

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
        <div className="mt-10">
          <Link to="/">
            <button
              type="button"
              className="border border-teal-500 bg-teal-500 hover:bg-teal-600 text-white rounded-md px-8 py-2 transition duration-500 ease select-none disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed"
            >
              กลับหน้าแรก
            </button>
          </Link>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default SuccessPage;
