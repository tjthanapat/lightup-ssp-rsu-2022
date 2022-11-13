import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const Root = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="m-10 sm:mx-16">
        <h1 className="text-4xl">กิจกรรมเปิดโลกทัศน์ทางการศึกษาและอาชีพ</h1>
        <h2 className="text-xl">ณ มหาวิทยาลัยรังสิต</h2>
        <h2 className="text-xl">วันที่ 25 พฤศจิกายน 2565</h2>
        <div className="mt-10">
          <Link to="/search">
            <button
              type="button"
              className="border border-teal-500 bg-teal-500 hover:bg-teal-600 text-white rounded-md px-8 py-2 transition duration-500 ease select-none disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed"
            >
              ค้นหาข้อมูลผู้ลงทะเบียน
            </button>
          </Link>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Root;
