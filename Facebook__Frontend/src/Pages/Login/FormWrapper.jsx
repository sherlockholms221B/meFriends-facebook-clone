import * as React from 'react'
import { Demaceta } from '../../Components/RDOMC'

export function FormWrapper({ qustion, title, children }) {
  return (
    <React.Fragment>
      {qustion && (
        <React.Fragment>
          <Demaceta />
          <h2 className='text-sm p_sm:text-lg px-4 text-gray-900  dark:text-heading_dark_white font-bold tracking-wide mb-3'>
            {qustion}
          </h2>
          <Demaceta />
        </React.Fragment>
      )}
      <h2 className='px-5 text-center mt-2 mb-4 small:text-md dark:text-heading_dark_gray text-gray-800 text-xs font-medium'>
        {title && title}
      </h2>
      <section>{children}</section>
    </React.Fragment>
  )
}
