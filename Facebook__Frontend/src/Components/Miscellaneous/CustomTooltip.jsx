import React from 'react';
import ReactTooltip from 'react-tooltip';

const CustomTooltip = ({ id, effect, type, title, place }) => {
  return (
    <ReactTooltip
      id={id}
      effect={effect}
      type={type}
      place={place}
      className='custom-tooltip'
    >
      <p className='text-lg'>{title}</p>
    </ReactTooltip>
  );
};

export default CustomTooltip;
