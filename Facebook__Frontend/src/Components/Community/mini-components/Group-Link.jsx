import { Link } from 'react-router-dom';

const GroupLink = ({ img, name, isMbar }) => {
  const dynamicLocation = (e) => {
    const element = e.target.getBoundingClientRect();
    dynamicLocation({
      left: element.right,
      center: (element.top + element.bottom) / 2,
    });
  };

  return (
    <Link
      onMouseOver={dynamicLocation}
      to={`/profile`}
      className={`${
        !isMbar
          ? 'pl-1'
          : 'pl-2 lg:hover:bg-light500  lg:dark:hover:bg-dark300 hover:bg-inherit'
      } relative mb-0.5 flex flex-row gap-2.5 items-center w-full py-1.5 pl-1 rounded-md`}
    >
      <img
        onMouseOver={(e) => e.stopPropagation()}
        src={img}
        alt='profile'
        className='object-cover w-6 h-6 rounded-lg'
      />
      {isMbar && (
        <h3
          onMouseOver={(e) => e.stopPropagation()}
          className={`dark:text-white hidden lg:block text-base font-semibold text-gray-900 `}
        >
          {name}
        </h3>
      )}
    </Link>
  );
};

export default GroupLink;
