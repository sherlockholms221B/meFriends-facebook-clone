import React from 'react';

const PostMediaLayout = ({ post, postlength }) => {
  const renderMedia = (url, filetype) => {
    const isVideo = filetype.match('video');
    return isVideo ? (
      <video src={url} className='h-full w-full object-cover' />
    ) : (
      <img src={url} alt='post' className='h-full w-full object-cover' />
    );
  };

  const renderSingleImageOrVideo = () => {
    const urlone = post[0].url;
    return (
      <div className='h-full w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        {renderMedia(urlone, post[0].filetype)}
      </div>
    );
  };

  const renderTwoImagesOrVideos = () => {
    return (
      <div className='flex flex-row gap-0.5 h-458 w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        {post.map((file, i) => (
          <div key={i} className='h-full w-1/2'>
            {renderMedia(file.url, file.filetype)}
          </div>
        ))}
      </div>
    );
  };

  const renderThreeImagesOrVideos = () => {
    const urlone = post[0].url;
    return (
      <div className='flex flex-row gap-0.5 h-458 w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <div className='h-full w-1/2'>
          {renderMedia(urlone, post[0].filetype)}
        </div>
        <div className='h-full w-1/2 flex flex-col gap-0.5 border-gray-300 dark:border-[#3a3b3c]'>
          {post
            .filter((_, i) => i !== 0)
            .map((file, i) => (
              <div key={i} className='h-1/2 w-full'>
                {renderMedia(file.url, file.filetype)}
              </div>
            ))}
        </div>
      </div>
    );
  };

  const renderFourImagesOrVideos = () => {
    const urlone = post[0].url;
    return (
      <div className='flex flex-row gap-0.5 h-458 w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <div className='h-full w-2/3'>
          {renderMedia(urlone, post[0].filetype)}
        </div>
        <div className='h-full w-[44%] flex flex-col gap-0.5 border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
          {post
            .filter((_, i) => i !== 0)
            .map((file, i) => (
              <div key={i} className='h-[33%] w-full'>
                {renderMedia(file.url, file.filetype)}
              </div>
            ))}
        </div>
      </div>
    );
  };

  const renderMoreThanFourImagesOrVideos = () => {
    const urlone = post[0].url;
    return (
      <div className='flex flex-row gap-0.5 h-458 w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <div className='h-full w-2/3'>
          {renderMedia(urlone, post[0].filetype)}
        </div>
        <div className='h-full w-[44%] flex flex-col gap-0.5 border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
          {post
            .filter((_, i) => i >= 1 && i <= 3)
            .map((file, i) => (
              <div key={i} className='h-[33%] w-full relative'>
                {renderMedia(file.url, file.filetype)}
                {i === 2 && (
                  <article className='flex items-center justify-center absolute top-0 right-0 w-full h-full bg-transparent'>
                    <h3 className='text-4xl text-white'>{`+${
                      postlength - 4
                    }`}</h3>
                  </article>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  };

  // Based on the number of images/videos in the `post` array, render the appropriate layout
  if (postlength === 1) {
    return renderSingleImageOrVideo();
  } else if (postlength === 2) {
    return renderTwoImagesOrVideos();
  } else if (postlength === 3) {
    return renderThreeImagesOrVideos();
  } else if (postlength === 4) {
    return renderFourImagesOrVideos();
  } else {
    return renderMoreThanFourImagesOrVideos();
  }
};

export default PostMediaLayout;
