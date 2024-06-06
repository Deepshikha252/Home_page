import React from "react";
import rectangles from "../assets/img/rectangles.png";
import Image from "../assets/img/Image.png";
import Rectangle from "../assets/img/Rectangle.png";
import Rectangle13 from "../assets/img/Rectangle13.png";
import ShapeCard from "../assets/img/ShapeCard.png";

// import { Link } from 'react-router-dom';

const BigHeading = () => {
  return (
    <>
      {/* first box card */}

      {/* <div className="flex flex-col md:flex-row w-full h-[420px] md:h-auto">
        <div className="flex flex-col items-center justify-center flex-1 h-full p-6 text-white bg-blue-600 md:p-10 md:w-1/2 md:h-auto md:flex md:items-center md:justify-start">
          <h1 className="text-2xl font-bold md:text-4xl">Big Heading Text</h1>
          <p className="max-w-xs mt-4 text-center md:text-left md:max-w-sm lg:max-w-md">
            Small descriptive text in 3-4 lines can go here. They can be a
            single line or short paragraph too. Adjust the width of this
            container to make sure the text wraps correctly.
          </p>
          <button className="px-4 py-2 mt-6 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
            KNOW MORE
          </button>
        </div>
        <div
          className="flex flex-col items-center justify-center flex-1 h-full p-6 text-white bg-center bg-cover md:p-10 md:w-1/2 md:h-auto"
          style={{ backgroundImage: `url(${rectangles})` }}
        >
          <h1 className="text-2xl font-bold md:text-4xl">Big Heading Text</h1>
          <p className="max-w-xs mt-4 text-center md:text-left md:max-w-sm lg:max-w-md">
            Small descriptive text in 3-4 lines can go here. They can be a
            single line or short paragraph too. Adjust the width of this
            container to make sure the text wraps correctly.
          </p>
          <button className="px-4 py-2 mt-6 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
            KNOW MORE
          </button>
        </div>
      </div> */}

{/* 2nd box */}

{/* <div className=" bg-neutral-200">
        <div className="flex flex-row gap-2 p-4 overflow-y-auto h-[200px] sm:h-[280px] md:h-[380px] xl:h-[450px] mx-auto">
          <div className="relative flex flex-col items-center justify-center p-4 text-white transition-all duration-300 bg-teal-500 md:p-10 md:w-1/2 md:h-auto group">
            <h1 className="z-10 text-2xl font-bold md:text-4xl group-hover:hidden">
              Feature Services2
            </h1>
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-purple-900 bg-opacity-0 group-hover:bg-opacity-100">
              <h2 className="text-lg font-bold transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
                FEATURED SERVICE 01
              </h2>
              <div className="flex flex-col items-center justify-center">
                <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
                  Description and details of this service go here in a short
                  paragraph.
                </p>
                <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
                  <li>Like this</li>
                  <li>Like this</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center p-4 text-white transition-all duration-300 bg-teal-500 md:p-10 md:w-1/2 md:h-auto group">
            <h1 className="z-10 text-2xl font-bold md:text-4xl group-hover:hidden">
              Feature Services2
            </h1>
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-purple-900 bg-opacity-0 group-hover:bg-opacity-100">
              <h2 className="text-lg font-bold transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
                FEATURED SERVICE 01
              </h2>
              <div className="flex flex-col items-center justify-center">
                <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
                  Description and details of this service go here in a short
                  paragraph.
                </p>
                <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
                  <li>Like this</li>
                  <li>Like this</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
   



{/* first box card */}

<div className="flex flex-col md:flex-row  md:h-[420px] ">
  <div className="flex flex-col items-center justify-center flex-1 p-6 text-white bg-blue-600 h-[200px] sm:h-[280px] md:h-[420px] xl:h-[450px]md:p-10   md:w-1/2  group" >
    <h1 className="text-2xl font-bold md:text-4xl">Big Heading Text</h1>
    <p className="max-w-xs mt-4 text-center md:text-left md:max-w-md lg:max-w-lg">
      Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Adjust the width of this container to make sure the text wraps correctly.
    </p>
    <button className="px-4 py-2 mt-6 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
      KNOW MORE
    </button>
  </div>
  <div className="flex flex-col items-center justify-center flex-1 p-6 text-white bg-center bg-cover md:p-10 md:w-1/2 md:h-auto group" style={{ backgroundImage: `url(${rectangles})` }}>
    <h1 className="text-2xl font-bold md:text-4xl">Big Heading Text</h1>
    <p className="max-w-xs mt-4 text-center md:text-left md:max-w-md lg:max-w-lg">
      Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Adjust the width of this container to make sure the text wraps correctly.
    </p>
    <button className="px-4 py-2 mt-6 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
      KNOW MORE
    </button>
  </div>
</div>





{/* 2rd box  slider 2nd*/}

      <div className=" bg-neutral-200">
        <div className="flex flex-row gap-2 p-4 overflow-y-auto h-[200px] sm:h-[280px] md:h-[380px] xl:h-[450px] mx-auto">
          <div className="relative flex flex-col items-center justify-center p-4 text-white transition-all duration-300 bg-teal-500 md:p-10 md:w-1/2 md:h-auto group">
            <h1 className="z-10 text-2xl font-bold md:text-4xl group-hover:hidden">
              Feature Services2
            </h1>
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-purple-900 bg-opacity-0 group-hover:bg-opacity-100">
              <h2 className="text-lg font-bold transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
                FEATURED SERVICE 01
              </h2>
              <div className="flex flex-col items-center justify-center">
                <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
                  Description and details of this service go here in a short
                  paragraph.
                </p>
                <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
                  <li>Like this</li>
                  <li>Like this</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center p-4 text-white transition-all duration-300 bg-teal-500 md:p-10 md:w-1/2 md:h-auto group">
            <h1 className="z-10 text-2xl font-bold md:text-4xl group-hover:hidden">
              Feature Services2
            </h1>
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-purple-900 bg-opacity-0 group-hover:bg-opacity-100">
              <h2 className="text-lg font-bold transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
                FEATURED SERVICE 01
              </h2>
              <div className="flex flex-col items-center justify-center">
                <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
                  Description and details of this service go here in a short
                  paragraph.
                </p>
                <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
                  <li>Like this</li>
                  <li>Like this</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* background text1 */} 

<section className="w-full p-2  max-w-[1100px] m-auto">
        <div className="relative overflow-hidden rounded-lg ">
          <img
            src={ShapeCard}
            alt=""
            className="w-[600px] h-[300px] md:h-[500px] object-cover"
          />

          <div className="absolute p-4 text-white top-10 left-8 md:left-20 md:p-8">
            <h1 className="text-3xl font-bold md:text-5xl">
              Big Heading
              <br />
              Text goes here
            </h1>
            <hr className="w-2/3 my-4 border-t-4 border-yellow-500 rounded" />
          </div>

          <div className="md:absolute bottom-0  lg:bottom-10 right-0 md:right-[20px] bg-white p-4 md:p-8 w-[600px] md:w-[550px] h-[350px] lg:h-[400px] flex flex-col justify-center shadow-lg ">
            <p className="text-sm leading-relaxed md:text-base lg:text-lg">
              Small descriptive text in 3-4 lines can <br />
              go here. They can be a single line <br />
              or short paragraph too. Small descriptive <br />
              text in 3-4 lines can go here. They can <br />
              be a single line or short paragraph <br />
              too. Small descriptive text in 3-4 lines <br />
              can go here. They can be a single line or short paragraph too.
              Small descriptive text in 3-4 lines can go <br />
              here. They can be a single line or short paragraph too. <br />
            </p>
            <div className="flex items-center justify-start mt-4">
              <button className="w-40 p-2 px-6 py-4 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </section>
     
{/* background text2 */} 
    

<section className="w-full p-2  max-w-[1100px] m-auto">
        <div className="relative overflow-hidden rounded-lg ">
          <img
            src={Rectangle}
            alt=""
            className="w-[600px] h-[300px] md:h-[500px] object-cover"
          />
          <div className="md:absolute bottom-0  lg:bottom-10 right-0 md:right-[226px] bg-white p-4 md:p-8 w-[600px] md:w-[550px] h-[350px] lg:h-[400px] flex flex-col justify-center shadow-lg ">
            <p className="text-sm leading-relaxed md:text-base lg:text-lg">
              Small descriptive text in 3-4 lines can <br />
              go here. They can be a single line <br />
              or short paragraph too. Small descriptive <br />
              text in 3-4 lines can go here. They can <br />
              be a single line or short paragraph <br />
              too. Small descriptive text in 3-4 lines <br />
              can go here. They can be a single line or short paragraph too.
              Small descriptive text in 3-4 lines can go <br />
              here. They can be a single line or short paragraph too. <br />
            </p>
            <div className="flex items-center justify-start mt-4">
              <button className="w-40 p-2 px-6 py-4 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BigHeading;
