import React from 'react';
import sec1 from '../../../assets/SEC1.png';

function Section1() {
  return (
    <div className='flex-col  text-center content-center  m-12 md:m-16 xl:md-24 '>
      <div className='text-4xl md:text-6xl  my-12 md:my-12 xl:text-8xl xl:my-14'>Our Mission</div>
     
      <div className='md:flex items-center content-center'>
      <img src={sec1} className=' my-8 md:w-[45%] ' />
        <div>
            <span className='font-bold  md:text-lg lg:text-xl xl:text-3xl '>Sed ut perspiciatis unde omnis</span>
            <p className='text-black/60 font-light mx-2 my-4 xl:my-12  md:w-[80%] md:ml-20 md:text-left xl:text-2xl  xl:ml-32 xl:w-[70%]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
        </div>  
      </div>

      <div className='md:flex items-center content-center my-32'>
        <div>
            <span className='font-bold py-8 md:text-lg lg:text-xl xl:text-3xl xl:py-12'>Sed ut perspiciatis unde omnis</span>
            <p className='text-black/60 font-light mx-2 my-4 xl:my-12 md:w-[80%]  md:text-left xl:text-2xl  xl:w-[70%]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
        </div>
        <img src={sec1} className='my-8 md:w-[45%] ' />
      </div>
      
      

    </div>
  );
}

export default Section1;
