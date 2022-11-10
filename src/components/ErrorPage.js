import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = (props) => {
  const { error } = props;

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-md my-20 mx-auto p-5">
        <h1 className="text-3xl">มีบางอย่างผิดพลาด</h1>
        <p className="mt-5">
          {error.name}: {error.message}
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

export default ErrorPage;
