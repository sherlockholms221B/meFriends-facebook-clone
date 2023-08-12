import React from 'react';
import useAuthStore from '../../Store/AuthStore';
import { urlFor } from '../../utils/client';

const UserProfileImage = ({ size, hidden, customStyle, data }) => {
  const { userProfile } = useAuthStore();

  const profileImageUrl = data?.profileImage
    ? urlFor(data?.profileImage.asset).url()
    : urlFor(userProfile?.profileImage.asset).url();

  const imageSizeClass = size
    ? 'w-8 h-8'
    : 'w-5 h-5 xs:w-8 xs:h-8 mdsm:w-11 mdsm:h-11';

  const profileName = data?.userName || userProfile?.userName;

  return (
    <figure className={customStyle}>
      <img
        src={profileImageUrl}
        alt='profile'
        className={`rounded-full object-cover ${imageSizeClass}`}
      />
      {hidden && (
        <figcaption className='w-fit'>
          <p className='text-black dark:text-thdark500 tracking-wider font-bold text-base brightness-95 capitalize hidden lg:block'>
            {profileName}
          </p>
        </figcaption>
      )}
    </figure>
  );
};

export default UserProfileImage;
