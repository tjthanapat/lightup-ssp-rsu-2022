import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const StudentLists = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-lg my-20 mx-auto p-5">
        <h1 className="text-3xl">รายชื่อนักเรียน</h1>
        <p>
          กิจกรรมเปิดโลกทัศน์ทางการศึกษาและอาชีพ ณ มหาวิทยาลัยรังสิต วันที่ 25
          พฤศจิกายน 2565
        </p>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link to="/studentlists/classroom">
            <div className="h-24 p-5 bg-gray-100 rounded-lg flex justify-center items-center transition duration-500 ease select-none hover:bg-gray-200 hover:cursor-pointer">
              <h2 className="text-xl">รายชื่อตามห้องเรียน</h2>
            </div>
          </Link>
          <Link to="/studentlists/booth">
            <div className="h-24 p-5 bg-gray-100 rounded-lg flex justify-center items-center transition duration-500 ease select-none hover:bg-gray-200 hover:cursor-pointer">
              <h2 className="text-xl">รายชื่อตามคณะที่เลือก</h2>
            </div>
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default StudentLists;
