import React from 'react';
import onu from '../../assets/onu.png';

function Section4() {
  return (
    <section class="bg-white dark:bg-gray-900 ">
    
    <div class="container px-6 py-8 mx-auto ">
        <h2 class="text-3xl md:text-4xl  xl:text-6xl  text-center text-gray-800 capitalize  dark:text-white mb-12 lg:mt-32">Our Partners</h2>
        <p className='text-black/60 font-light my-4 xl:my-12  md:w-[80%]   xl:text-2xl text-center  xl:w-[60%] mx-auto'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
        <div class="grid gap-16 md:gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <div class="w-full max-w-xs text-center mx-auto">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src={onu} alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">ONU FEMMES</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Sed ut perspiciatis</span>
                </div>
            </div>

            <div class="w-full max-w-xs text-center mx-auto">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src={onu} />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">ONU FEMMES</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Sed ut perspiciatis</span>
                </div>
            </div>

            <div class="w-full max-w-xs text-center mx-auto">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src={onu} />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">ONU FEMMES</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Sed ut perspiciatis</span>
                </div>
            </div>

            <div class="w-full max-w-xs text-center mx-auto">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src={onu} />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">ONU FEMMES</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Sed ut perspiciatis</span>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Section4;
