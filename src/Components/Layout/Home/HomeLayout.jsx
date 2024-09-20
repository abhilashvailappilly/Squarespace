import React from 'react';
import LeftSideLayout from './LeftSideLayout';
import RightSideLayout from './RightSideLayout';

const HomeLayout = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='hidden md:block md:w-2/3'>
        <LeftSideLayout />
      </div>
      <div className='w-full md:w-1/3'>
        <RightSideLayout />
      </div>
    </div>
  );
}

export default HomeLayout;
