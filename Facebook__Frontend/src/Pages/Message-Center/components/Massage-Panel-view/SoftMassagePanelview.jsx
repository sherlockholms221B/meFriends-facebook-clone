import React from 'react'

const SoftMassagePanelview = ({ actionButton = [], title }) => {
  return (
    <section className='flex flex-row w-full justify-between items-center p-1.5 mdxs:p-3'>
      <h3 className='text-2xl font-bold text-gray-900 dark:text-thdark500'>
        {title}
      </h3>
      <article className='flex flex-row gap-2 items-center pl-1'>
        {actionButton.map((option, i) => (
          <article
            className='rounded-full p-2 dark:bg-dark300 bg-light300 md:bg-inherit dark:hover:bg-dark300 hover:bg-light300 cursor-pointer'
            key={i}
          >
            <i className='text-lg text-gray-600 dark:text-thlight500'>
              {option.icon}
            </i>
          </article>
        ))}
      </article>
    </section>
  )
}

export default SoftMassagePanelview
