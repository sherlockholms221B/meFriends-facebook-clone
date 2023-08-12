import React from 'react';
import { Icon } from '../../../utils/Icon';

const PostAudienceIcon = ({ state }) => {
  const renderAudienceIcon = () => {
    switch (state) {
      case 'Public':
        return <Icon.GiEarthAmerica />;
      case 'Friends':
        return <Icon.FaUserFriends />;
      case 'Only me':
        return <Icon.HiLockClosed />;
      case 'Specific friends':
        return <Icon.MdPerson />;
      case 'Custom':
        return <Icon.MdSettings />;
      default:
        return null;
    }
  };

  return <React.Fragment>{renderAudienceIcon()}</React.Fragment>;
};

export default PostAudienceIcon;
