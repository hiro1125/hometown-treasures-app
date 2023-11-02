import Link from 'next/link';
import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const AtomAddition = () => (
  <>
    <div className='left-2 flex items-center justify-center cursor-pointer'>
      <Link href={'register'} target='blank'>
        <IoIosAddCircleOutline size={50} />
      </Link>
    </div>
  </>
);

export default AtomAddition;
