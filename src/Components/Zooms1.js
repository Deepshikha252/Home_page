import React from 'react'
import Image from "../assets/img/Image.png";
const Zooms1 = () => {
  return (
    <div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      <div className="relative overflow-hidden rounded-lg group h-[650px]">
       
        <img
          src={Image}
          alt=""
         width={400}
         height={1000}
          className="object-cover w-full transition-transform duration-300 ease-in-out h-80 group-hover:scale-110 "
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <h3 className="text-lg font-semibold md:text-xl">   Name of the work or project </h3>
          <h3 className="text-lg font-semibold md:text-xl ">goes here in 2 lines</h3>
          <div className="my-8 border-t-4 border-blue-800 rounded dark:border-green-800" />
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg group">
       
        <img
          src={Image}
          alt=""
          
          className="object-cover w-full transition-transform duration-300 ease-in-out h-80 group-hover:scale-110"
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <h3 className="text-lg font-semibold md:text-xl">Name of the work or project</h3>
          <h3 className="text-lg font-semibold md:text-xl">goes here in 2 lines</h3>
          <div className="my-8 border-t-4 border-blue-800 rounded dark:border-green-800" />
    
        </div>
      </div>
    </div>

    </div>
  )
}

export default Zooms1
