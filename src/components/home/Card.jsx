import React from 'react';

function Card() {
  return (
    <div class="w-full lg:m-4 xl:m-6 max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-8 m-auto">
    <img class="object-cover w-full h-40 md:h-48 " src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>

    <div class="py-5 text-center">
        <a href="#" class="block text-lg md:text:2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Sed ut perspiciatis</a>
        <p class="text-xs md:text-lg font-light text-gray-700 dark:text-gray-200 p-4">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
</div>
  );
}

export default Card;
