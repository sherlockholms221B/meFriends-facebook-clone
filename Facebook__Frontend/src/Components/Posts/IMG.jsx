import React from 'react'
import { urlFor } from '../../utils/client'

const IMG = ({ post, postlength }) => {
  

  if (postlength === 1) {
    const urlone = post[0].url ? post[0].url : urlFor(post[0].file.asset).url()
    return (
      <div className='h-full w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        {post[0].filename.match('video') ? (
          <video
            controls
            autoPlay
            src={urlone}
            className='h-full w-full object-cover'
          ></video>
        ) : (
          <img src={urlone} alt='post' className='h-full w-full object-cover' />
        )}
      </div>
    )
  }
  if (postlength === 2) {
    return (
      <div className='flex flex-row gap-0.5 h-458 w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        {post.map((post, i) => {
          const urlone = post.url ? post.url : urlFor(post?.file.asset).url()
          return (
            <div key={i} className='h-full w-1/2'>
              {post.filename.match('video') ? (
                <video
                  src={urlone}
                  className='h-full w-full object-cover'
                ></video>
              ) : (
                <img
                  src={urlone}
                  alt='post'
                  className='h-full w-full object-cover'
                />
              )}
            </div>
          )
        })}
      </div>
    )
  }
  if (postlength === 3) {
    console.log(post[0].filename)
    const urlone = post[0].url ? post[0].url : urlFor(post[0].file.asset).url()

    return (
      <div className='flex flex-row gap-0.5 h-458 w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <div className='h-full w-1/2'>
          {post[0].filename.match('video') ? (
            <video src={urlone} className='h-full w-full object-cover'></video>
          ) : (
            <img
              src={urlone}
              alt='post'
              className='h-full w-full object-cover'
            />
          )}
        </div>
        <div className='h-full w-1/2 flex flex-col gap-0.5 border-gray-300 dark:border-[#3a3b3c]'>
          {post
            .filter((post, i) => i !== 0)
            .map((post, i) => {
              const url = post.url ? post?.url : urlFor(post?.file.asset).url()
              return (
                <div key={i} className='h-1/2 w-full'>
                  {post.filename.match('video') ? (
                    <video
                      src={url}
                      className='h-full w-full object-cover'
                    ></video>
                  ) : (
                    <img
                      src={url}
                      alt='post'
                      className='h-full w-full object-cover'
                    />
                  )}
                </div>
              )
            })}
        </div>
      </div>
    )
  }
  if (postlength === 4) {
    const urlone = post[0].url ? post[0].url : urlFor(post[0].file.asset).url()
    return (
      <div className='flex flex-row gap-0.5 h-458 w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <div className='h-full w-2/3'>
          {post[0].filename.match('video') ? (
            <video src={urlone} className='h-full w-full object-cover'></video>
          ) : (
            <img
              src={urlone}
              alt='post'
              className='h-full w-full object-cover'
            />
          )}
        </div>
        <div className='h-full w-[44%] flex flex-col gap-0.5 border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
          {post
            .filter((post, i) => i !== 0)
            .map((post, i) => {
              const url = post.url ? post?.url : urlFor(post?.file.asset).url()
              return (
                <div key={i} className='h-[33%] w-full'>
                  {post.filename.match('video') ? (
                    <video
                      src={url}
                      className='h-full w-full object-cover'
                    ></video>
                  ) : (
                    <img
                      src={url}
                      alt='post'
                      className='h-full w-full object-cover'
                    />
                  )}
                </div>
              )
            })}
        </div>
      </div>
    )
  }
  if (postlength > 4) {
    const urlone = post[0].url ? post[0].url : urlFor(post[0].file.asset).url()
    return (
      <div className='flex flex-row gap-0.5 h-458 w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <div className='h-full w-2/3'>
          {post[0].filename.match('video') ? (
            <video src={urlone} className='h-full w-full object-cover'></video>
          ) : (
            <img
              src={urlone}
              alt='post'
              className='h-full w-full object-cover'
            />
          )}
        </div>
        <div className='h-full w-[44%] flex flex-col gap-0.5 border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
          {post
            .filter((post, i) => i >= 1 && i <= 3)
            .map((post, i) => {
              const url = post.url ? post?.url : urlFor(post?.file.asset).url()
              return (
                <div key={i} className='h-[33%] w-full relative'>
                  {post.filename.match('video') ? (
                    <video
                      src={url}
                      className='h-full w-full object-cover'
                    ></video>
                  ) : (
                    <img
                      src={url}
                      alt='post'
                      className='h-full w-full object-cover'
                    />
                  )}
                  <article
                    className={`${
                      i !== 2 ? 'hidden' : 'flex'
                    } flex items-center justify-center absolute top-0 right-0 w-full h-full bg-transparent`}
                  >
                    <h3 className='text-4xl text-white'>{`+${
                      postlength - 4
                    }`}</h3>
                  </article>
                </div>
              )
            })}
        </div>
      </div>
    )
  }

  return <section className=''>Something went wrong check back letter</section>
}

export default IMG
