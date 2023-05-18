import React from 'react';
import team from '../../assets/teamwork 1.png';
import partner from '../../assets/partner 1.png';
import stats from '../../assets/stats 1.png';
import distance from '../../assets/distance 1.png';
import users from '../../assets/silhouette.png';


function Section5() {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="container py-10 mx-auto ">
        <h1 class="text-4xl md:text-6xl  my-12 md:my-12 xl:text-8xl xl:my-14 text-center"> Our Impact</h1>

        <p class="w-64 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p class="w-48 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 xl:mt-16  xl:grid-cols-5">
               
            <div class="flex flex-col items-center p-4">
                <div class="w-32 h-32 bg-lightYellow rounded-full  ring-4 ring-yellow flex justify-center  items-center ">
                    <img src={team} className=' w-[60%] ' />
                </div >
                <h1 class="font-semibold text-3xl mt-4 "> 1627</h1>

                <span class="font-semibold text-2xl  ">TEAM PROJECTS</span>
            </div>
            <div class="flex flex-col items-center p-4">
                <div class="w-32 h-32 bg-lightYellow rounded-full  ring-4 ring-yellow flex justify-center  items-center ">
                    <img src={users} className=' w-[60%] ' />
                </div >
                <h1 class="font-semibold text-3xl mt-4 "> 1627</h1>

                <span class="font-semibold text-2xl text-center ">STUDENTS MEMBERS</span>
            </div>
            <div class="flex flex-col items-center p-4">
                <div class="w-32 h-32 bg-lightYellow rounded-full  ring-4 ring-yellow flex justify-center  items-center ">
                    <img src={partner} className=' w-[60%] ' />
                </div >
                <h1 class="font-semibold text-3xl mt-4 "> 1627</h1>

                <span class="font-semibold text-2xl  ">PARTNERS</span>
            </div>
            <div class="flex flex-col items-center p-4">
                <div class="w-32 h-32 bg-lightYellow rounded-full  ring-4 ring-yellow flex justify-center  items-center ">
                    <img src={stats} className=' w-[60%] ' />
                </div >
                <h1 class="font-semibold text-3xl mt-4 "> 1627</h1>

                <span class="font-semibold text-2xl  ">LIVES IMPACTED</span>
            </div>
            <div class="flex flex-col items-center p-4">
                <div class="w-32 h-32 bg-lightYellow rounded-full  ring-4 ring-yellow flex justify-center  items-center ">
                    <img src={distance} className=' w-[60%] ' />
                </div >
                <h1 class="font-semibold text-3xl mt-4 "> 1627</h1>

                <span class="font-semibold text-2xl text-center  ">KILOMETERS TRAVELED</span>
            </div>


        </div>
    </div>
</section>
  );
}

export default Section5;
