import React from 'react';


function Section3() {
  return (
    <section class="bg-white dark:bg-gray-900 ">
    
    <div class="container px-6 py-8 mx-auto ">
        <h2 class="text-3xl md:text-4xl  xl:text-6xl  text-center text-gray-800 capitalize  dark:text-white mb-12">Presentation</h2>
        <p className='text-black/60 font-light my-4 xl:my-12  md:w-[80%]   xl:text-2xl text-center  xl:w-[60%] mx-auto mb-10 lg:my-16'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
        <div class=" grid grid-rows-3 grid-cols-4 gap-x-2 gap-y-3 h-[220px] md:h-[300px] lg:h-[350px] xl:h-[500px] w-[80%] mx-auto">
            <div className='row-span-2 col-span-2 bg-p3 bg-cover'></div>
            <div className='col-span-1 row-span-1 bg-cover bg-p4'></div>
            <div className='col-span-1 row-span-1 bg-cover bg-p5'></div>
            <div className='row-span-2 col-span-2 bg-cover bg-p2'></div>
            <div className='col-span-1 row-span-1 bg-cover bg-p6'></div>
            <div className='col-span-1 row-span-1 bg-cover bg-p1'></div>
           

        </div>
    </div>
</section>
  );
}

export default Section3;
