import React from 'react';

const UploadHeader = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <nav>
          <ul className="flex space-x-4">
            <h1>
              <a className="hover:text-gray-400 m-20">Title</a>
            </h1>
            <h1>
              <a className="hover:text-gray-400 m-10">Mastering status</a>
            </h1>
            <h1>
              <a className="hover:text-gray-400 m-80">Play</a>
            </h1>
            <h1>
              <a className="hover:text-gray-400 m-30">Duration</a>
            </h1>
          </ul>
        </nav>
      </div>
    </header> /*Will be Changed all design in here*/
  );
};


export default UploadHeader;