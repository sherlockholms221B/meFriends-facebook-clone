import * as React from 'react';
import { Demarcate } from '../../../../Components/RDOMC';

export function FormWrapper({ qustion, title, children }) {
  return (
    <React.Fragment>
      {qustion && (
        <React.Fragment>
          <Demarcate />
          <h2 className='text-sm mdxs:text-lg px-4 text-gray-900  dark:text-thdark500 font-bold tracking-wide mb-3'>
            {qustion}
          </h2>
          <Demarcate />
        </React.Fragment>
      )}
      <h2 className='px-5 text-center mt-2 mb-4 mdsm:text-md dark:text-thlight500 text-gray-800 text-xs font-medium'>
        {title && title}
      </h2>
      <section>{children}</section>
    </React.Fragment>
  );
}
