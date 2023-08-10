import React, { useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

import { Link } from 'react-router-dom';

import { comments, posts } from '../../../utils/constants';
import { person_nine, person_eight } from '../../../Assets/exports';
import { MdOutlineSearch, MdVideoCall } from 'react-icons/md';
import { DIcons } from '../../../Assets/3d Icons';
//
import { SponsoredContent } from '../index';

const ProductAdvertisement = () => {
  const [add, setAdd] = useState(false);
  const addHearder =
    'lg:text-xl text-md font-bold text-gray-900 dark:text-thdark500';
  return (
    <div className='overflow-hidden h-screen hover:overflow-auto hidden lap:block w-260 lg:w-[280px] xlg:w-[320px] pt-4'>
      <div className='flex flex-col gap-3 justify-start items-start w-full h-max pt-2 pb-4'>
        <h3 className={`${addHearder}`}>Sponsored</h3>
        {[
          {
            img: person_nine,
            title: 'work in canada',
            description: 'job.workincanada.com',
          },
          {
            img: person_eight,
            title: 'Accelerate your career',
            description: 'travel.Towokina.com',
          },
        ].map(({ img, title, description }, index) => (
          <SponsoredContent
            setAdd={setAdd}
            add={add}
            img={img}
            title={title}
            description={description}
            index={index}
            key={index + title}
          />
        ))}

        <h3 className={`${addHearder}`}>Birthdays</h3>
        {[
          {
            img: (
              <img
                src={DIcons.gift}
                alt=''
                className=' w-10 h-10 object-cover'
              />
            ),
            name: 'Ani Banny Love ',
            count: '2 others',
            description: 'have their birthday today',
          },
        ].map(({ img, name, count, description }, i) => (
          <div
            className='flex flex-row gap-4 items-center p-2 w-full cursor-pointer rounded-md dark:hover:bg-dark300 hover:bg-light300 '
            key={i + name}
          >
            {img}
            <div className=''>
              <h3 className='text-md text-gray-900 dark:text-thlight500'>
                <span className='text-md font-semibold text-gray-900 capitalize dark:text-thdark500'>
                  {name}
                </span>{' '}
                and{' '}
                <span className='text-md font-semibold text-gray-900 capitalize dark:text-thdark500'>
                  {count}
                </span>
              </h3>
              <p className='text-md text-gray-900 dark:text-thlight500'>
                {description}{' '}
              </p>
            </div>
          </div>
        ))}
        <div className='flex flex-row w-full justify-between items-center mr-4'>
          <h3 className={`${addHearder}`}>Contacts</h3>
          <div className='flex flex-row gap-2 items-center pl-1'>
            {[
              {
                icon: <MdVideoCall />,
              },
              {
                icon: <MdOutlineSearch />,
              },
              {
                icon: <HiDotsHorizontal />,
              },
            ].map((option, i) => (
              <div
                className='rounded-full p-2 hover:bg-light300 dark:hover:bg-dark300 cursor-pointer'
                key={i}
              >
                <p className='text-gray-500 text-2xl dark:text-thlight500'>
                  {option.icon}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-start items-start w-full '>
          {comments.map(
            ({ creator, profile: [{ profileImage }], isPrivate }, i) => (
              <Link
                to={`/profile`}
                key={i + creator}
                className='flex flex-row gap-4 items-center p-2 dark:hover:bg-dark300 hover:bg-light300 rounded-md w-full'
              >
                <div className='relative hover:border-gray-300 border-white rounded-full cursor-pointer'>
                  <img
                    src={profileImage}
                    alt='profile'
                    className='object-cover w-7 h-7 rounded-full'
                  />
                  <div
                    className={` ${
                      isPrivate ? 'bg-green-600' : 'bg-red-600'
                    } absolute w-[9px] h-[9px] rounded-full  top-0 right-0 border-2 border-white z-10`}
                  ></div>
                </div>
                <h3 className='text-md font-semibold text-gray-700 capitalize dark:text-thdark500'>
                  {creator}
                </h3>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductAdvertisement;
