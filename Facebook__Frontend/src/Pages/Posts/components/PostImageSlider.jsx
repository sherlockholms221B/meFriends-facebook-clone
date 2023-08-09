import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { comments } from '../../../utils/constants';
import { motion } from 'framer-motion';
import { Icon } from '../../../utils/Icon';
import { profile } from '../../../Assets/exports';

const PostImageSlider = ({ synced, postfile }) => {
  //eslint-disable-next-line
  const navigate = useNavigate();
  const [index, setIndex] = React.useState(0);
  //eslint-disable-next-line
  const [progress, setProgress] = React.useState(0);
  const [viewedFiles, setViewedFiles] = React.useState(0);

  React.useEffect(() => {
    const lastindex = postfile?.length - 1;
    if (index < 0) {
      setIndex(lastindex);
    }
    if (index > lastindex) {
      setIndex(0);
    }
  }, [index, postfile?.length]);

  React.useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % postfile?.length);
      setProgress(0); // Reset progress when the slide changes
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index, postfile?.length]);

  React.useEffect(() => {
    // Update progress every 100 milliseconds
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + (100 / 5000) * 100); // 5000ms is the interval for slide change
    }, 100);

    // Clear the interval on unmount
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % postfile?.length);
    setProgress(0); // Reset progress when moving to the next slide
    setViewedFiles((prevCount) => Math.min(prevCount + 1, postfile?.length));
  };

  return (
    /* POST DETAILS IMAGE COMPONENT */
    <React.Fragment>
      {/* Blue bars for viewed files */}
      <div className='flex gap-1'>
        {postfile?.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-4 bg-${i < viewedFiles ? 'blue' : 'gray'}-500`}
          />
        ))}
      </div>
      {/* Swiper component for the slider */}
      <section className='max-w-[600px] w-full mx-auto h-full flex flex-row relative overflow-hidden'>
        {postfile?.map(({ url, filetype }, i) => {
          let position = 'nextSlide';
          if (index === i) {
            position = 'activeSlide';
          }
          if (index === i - 1 || (i === 0 && index === postfile.length - 1)) {
            position = 'lastSlide';
          }

          // Determine if the media file is an image or video
          const isImage = filetype.split('/').includes('image');
          const isVideo = filetype.split('/').includes('video');

          return (
            <React.Fragment key={i}>
              {/* Render image */}
              {isImage && (
                <img
                  src={url}
                  alt='post'
                  className={`${position} ${
                    synced ? 'rounded-xl' : ''
                  } h-full object-cover transition-all absolute w-full top-0 right-0 `}
                />
              )}

              {/* Render video */}
              {isVideo && (
                <video
                  src={url}
                  alt='post'
                  className={`${position} ${
                    synced ? 'rounded-xl' : ''
                  } h-full object-cover transition-all absolute w-full top-0 right-0 `}
                  controls
                  autoPlay
                />
              )}
            </React.Fragment>
          );
        })}
      </section>

      {/* Navigation buttons */}
      <motion.button
        whileHover={{
          x: [0, 20],
        }}
        onClick={() => setIndex(index - 1)}
        className='text-white absolute text-2xl top-1/2 left-2 rounded-full p-3 dark:bg-dark400 '
      >
        <Icon.FaChevronLeft />
      </motion.button>
      <motion.button
        whileHover={{
          x: [0, -20],
        }}
        onClick={() => setIndex(index + 1)}
        className='text-white absolute text-2xl top-1/2 right-2 rounded-full p-3 dark:bg-dark400'
      >
        <Icon.FaChevronRight />
      </motion.button>
    </React.Fragment>
  );
};

export default PostImageSlider;
