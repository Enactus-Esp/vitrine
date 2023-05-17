import React from 'react';

function HomeBg() {
  return (
    <div className=" bg-home h-[600px] md:h-[800px] xl:h-[1024px] bg-cover bg-fixed flex items-end">
      <div className='text-white w-[400px] h-[200px] md:w-[600px] md:h-[260px] lg:w-[700px] lg:h-[350px] xl:w-[844px] xl:h-[420px] text-sm md:text-xl lg:text-2xl xl:text-3xl font-semibold p-4 md:p-8 lg:p-12 xl:p-14 text-justify self-end bg-black/40 ml-10 mb-10 lg:ml-[60px]  lg:mb-[70px] xl:ml-[90px] xl:mb-[120px] '>
        <span className='text-yellow text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold flex flex-row'>
      Lorem ipsum
        </span>
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
  );
}

export default HomeBg;