import React from 'react'

const CMPFooter = ({ hidden }) => {
  return (
    <section className={' mt-2 mb-1 ' + (hidden && 'hidden mdsm:block')}>
      <p className='text-sm dark:text-thdark500'>
        Privacy · Terms · Advertising · Ad choices · Cookies ·{' '}
        <span className='cursor-pointer'>more</span> · Meta © 2022
      </p>
    </section>
  )
}

export default CMPFooter
