import React from 'react';

import rectangles from "../assets/img/rectangles.png";
const HoverComponent = ({ rectangles }) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-2" style={{ width: '100vw', height: '100vh' }}>
      <div
        className="flex-1 relative bg-cover bg-center text-white p-10 flex flex-col justify-center items-center md:w-1/2 h-full md:h-auto transition-all duration-300"
        style={{ backgroundImage: `url(${rectangles})` }}
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        {!toggle ? (
          <h1 className="text-2xl md:text-4xl font-bold z-10">FEATURED SERVICE 01</h1>
        ) : (
          <div className="absolute inset-0 bg-purple-900 bg-opacity-90 flex flex-col justify-center items-center transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Hello I will be seen on Hover</h2>
            <p className="mt-4 text-center md:text-left text-white">This text appears on hover.</p>
          </div>
        )}
      </div>

      <div
        className="flex-1 relative bg-cover bg-center text-white p-10 flex flex-col justify-center items-center md:w-1/2 h-full md:h-auto transition-all duration-300"
        style={{ backgroundImage: `url(${rectangles})` }}
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        {!toggle ? (
          <h1 className="text-2xl md:text-4xl font-bold z-10">FEATURED SERVICE 02</h1>
        ) : (
          <div className="absolute inset-0 bg-purple-900 bg-opacity-90 flex flex-col justify-center items-center transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Hello I will be seen on Hover</h2>
            <p className="mt-4 text-center md:text-left text-white">This text appears on hover.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverComponent;
