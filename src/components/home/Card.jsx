import React from 'react';
import projet from '../../assets/projet.png'

function Card() {
  return (
    <div class="w-full lg:m-4 xl:m-6 max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-8 m-auto">
    <img class="object-cover w-full h-40 md:h-48 " src={projet} alt="avatar"/>

    <div class="py-5 text-center">
        <a href="#" class="block text-lg md:text:2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Sed ut perspiciatis</a>
        <p class="text-xs md:text-lg font-light text-gray-700 dark:text-gray-200 p-4">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
</div>
  );
}

export default Card;
