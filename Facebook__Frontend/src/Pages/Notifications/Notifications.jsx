import React from 'react'

//import custom icons
import { Icon } from '../../utils/Icon'

//import higher order components
import MegWrapper from '../../Components/MegWrapper'

//import error bundary
import ErrorBoundary from '../../ErrorBundary'

//lazy loading component
const NotificationRoots = React.lazy(() => {
  return import('./NotificationRoots')
})
const Notifications = () => {
  return (
    <ErrorBoundary
      fallback={
        <div className='w-full h-full flex items-center justify-center'>
          <p className='text-black dark:text-white'>
            can't fetch Notifications
          </p>
        </div>
      }
    >
      <React.Suspense
        fallback={
          <div className='w-full h-full flex items-center justify-center'>
            <p className='text-black dark:text-white'>loading...</p>
          </div>
        }
      >
        <NotificationRoots
          title='Notifications'
          actionButton={[
            {
              icon: <Icon.TbDots />,
            },
          ]}
        >
          <article className='w-full flex flex-row flex-nowrap justify-start items-center gap-4 pl-2 mt-2'>
            {[
              {
                title: 'All',
              },
              {
                title: 'Unread',
              },
            ].map(({ title }, index) => (
              <div className='px-2 py-1 rounded bg-[#0c449f24]' key={index}>
                <h5 className='text-blue-600 text-base font-medium'>{title}</h5>
              </div>
            ))}
          </article>
        </NotificationRoots>
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default MegWrapper(Notifications)
