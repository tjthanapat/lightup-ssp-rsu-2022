import React from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className='m-10 sm:mx-16'>
        <h1 className="text-3xl">กิจกรรมเปิดโลกทัศน์ทางการศึกษาและอาชีพ</h1>
        <h2 className="text-xl">ณ มหาวิทยาลัยรังสิต</h2>
        <h2 className="text-xl">วันที่ x พฤศจิกายน 2565</h2>
        <div className="mt-10">
          <Link to="/register">
            <button
              type="button"
              className="border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-8 py-2 transition duration-500 ease select-none disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed"
            >
              ลงทะเบียน
            </button>
          </Link>
        </div>
        <footer className='mt-12'>
          <p className='text-sm text-gray-500'>Created by tjthanapat</p>
        </footer>
      </div>
    </div>
  );
};

export default Root;
