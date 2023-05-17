import React from 'react';
import Card from './Card';

function Section2() {
  return (
    <div className='m-12 md:m-24 md:my-16 lg:m-12 xl:m-32' >
        <span className='font-light md:text-2xl lg:text-3xl xl:text-4xl' >Snap photos and share like never before</span>
        <p className='font-extralight text-xs md:text-lg lg:text-xl xl:text-2xl mt-4 md:my-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
      <div className='lg:flex justify-between'>
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default Section2;
