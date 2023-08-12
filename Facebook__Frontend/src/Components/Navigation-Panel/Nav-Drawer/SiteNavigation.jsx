import * as React from 'react';

//import component from components
import { Input, THRDot } from '../../index';
import MbarLink from '../mini-components/MobileMenuButton';

//import functions
import { refresh } from '../../../Functions/utilities/SH';

//import context
import { useGlobalContext } from '../../../Hooks/context/UseContext';

//import custom links
import { mNavLink } from '../../../utils/links';

//import custom react icons
import { Icon } from '../../../utils/Icon';

const Navbar = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const navBarRef = React.useRef(null);
  const { dynamicLocation, location } = useGlobalContext();

  React.useLayoutEffect(() => {
    const element = navBarRef.current.getBoundingClientRect();
    const elementHeight = element.height;
    dynamicLocation({ height: elementHeight });
    //eslint-disable-next-line
  }, [location.height]);

  return (
    <nav
      ref={navBarRef}
      className='dark:bg-dark400 flex flex-col md:flex-row justify-between fixed top-0 right-0 w-full z-10 items-center bg-white shadow-inner border-b dark:border-b-2 dark:border-bd500'
    >
      <section className=' dark:bg-dark400 flex flex-row items-center w-full justify-between bg-white shadow-inner  dark:pb-1 dark:border-bd500 px-2 xs:px-4 py-1.5 '>
        <button onClick={refresh}>
          <h1 className='text-2xl font-semibold xs:text-[28px] mdsm:font-bold mdsm:text-3xl dark:text-white text-blue-600'>
            MeFriend
          </h1>
        </button>
        <section className='hidden mdsm:flex relative w-11 h-11 md:w-fit md: md:h-fit justify-center items-center dark:bg-dark300 rounded-full ml-10'>
          <Input
            type='text'
            name='search'
            placeholder='Search Mefriend'
            handleChange={(e) => {
              e.stopPropagation();
              setSearchValue(e.target.value);
            }}
            value={searchValue}
          />
          <Icon.MdOutlineSearch className=' md:absolute relative md:top-2.5 md:left-3 top-0 left-0 text-gray-500 text-2xl cursor-pointer dark:text-thlight500 xlg:-left-6' />
        </section>
        <THRDot />
      </section>
      <section className='flex flex-row items-center w-full justify-between px-4 py-2 mt-1 mdsm:hidden'>
        {mNavLink.map((data, index) => (
          <MbarLink {...data} key={index} />
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
