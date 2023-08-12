import React from 'react';
import { useLocation } from 'react-router-dom';

const ActiveMarker = ({ targetPage, currentPage }) => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('talling');

  const isCurrentPage = () => {
    const isHome = targetPage === 'home';
    const isCurrent = query === currentPage;
    const isTarget = query === targetPage;

    return (
      <div
        className={`absolute w-1.5 rounded-tr-xl rounded-br-xl h-full bg-blue-600 -left-4 lg:${
          isHome ? '-left-3' : '-left-4'
        } ${
          (isTarget || (isCurrent && !isHome)) && 'animate-pulse transition-all'
        } ${isCurrent && !isHome ? 'hidden' : ''}`}
      />
    );
  };

  return isCurrentPage();
};

export default ActiveMarker;
