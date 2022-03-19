import React from 'react';
export const Step = ({step, stepHeader, children}) => (
  <div class="flex relative pt-4 pb-6 w-full ml-4">
    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
      <div class="h-full w-1 bg-gray-100 pointer-events-none"></div>
    </div>
    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-1 inline-flex items-center justify-center bg-white border-2 border-gray-100 text-gray-800 relative z-10 title-font font-medium text-sm">{step}</div>
    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <h3>{stepHeader}</h3>
        <p class="pt-2">{children}</p>
      </div>
    </div>
    <div class='clear'></div>
  </div>
);