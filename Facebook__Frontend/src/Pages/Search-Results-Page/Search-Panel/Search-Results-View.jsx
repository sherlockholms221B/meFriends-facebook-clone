//mobile search page
import React from 'react';

//imports from react-router-dom
import { useNavigate } from 'react-router-dom';

// import react icons bundle from utils
import { Icon } from '../../../utils/Icon';

//import utils components
import Input from '../../../Components/Input';

const SearchResultsView = () => {
  //set up vaule
  const [value, setValue] = React.useState('');

  const navigation = useNavigate();
  return (
    <section className='dark:bg-dark500 bg-light400 h-screen w-screen'>
      <section className='flex flex-row gap-3 py-3 items-center border-b dark:border-bd500 border-gray-700'>
        <button
          onClick={() => navigation(-1)}
          className=' dark:shadow-black dark:bg-dark300 w-10 h-10    rounded-full hover:bg-light300 bg-gray-300 p-2 cursor-pointer'
        >
          <Icon.MdArrowBack className='text-2xl  dark:text-white' />
        </button>
        <Input
          value={value}
          handleChange={(e) => setValue(e.target.value)}
          name='searchpage'
          placeholder='Search...'
          type='text'
          autoFocus
        />
        {value && (
          <Icon.MdClose
            onClick={() => setValue('')}
            fontSize={30}
            className='absolute right-14 dark:text-white z-10 cursor-pointer'
          />
        )}
        <Icon.MdOutlineSearch fontSize={50} className='dark:text-white' />
      </section>
      <section className=''></section>
    </section>
  );
};

export default SearchResultsView;
