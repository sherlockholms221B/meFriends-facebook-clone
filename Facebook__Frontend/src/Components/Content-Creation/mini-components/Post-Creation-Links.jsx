import React from 'react';

//import react tooltip
import ToolTip from '../../Miscellaneous/CustomTooltip';

//import useglobal context
import { useGlobalContext } from '../../../Hooks/context/UseContext';

//import utililties function
import { forward, IconHandler } from '../../../Functions/utilities/SH';

//import links with ref
import { MakePostLinkOne, MakePostLinkTwo } from '../../../utils/LWRef';

//import custom icons
import { Icon } from '../../../utils/Icon';

const PostCreationLinks = ({ home }) => {
  const {
    createPostState,
    setCreatePostState,
    addToYourState,
    setAddToYourState,
    setAddPictureState,
    tagPeopleState,
    setTagPeopleState,
    setGoBack,
  } = useGlobalContext();

  return (
    <section className='flex flex-row gap-2 items-center w-full sm:w-fit'>
      <div
        className={
          ' flex flex-row items-center cursor-pointer ' +
          (home
            ? 'w-full justify-around sm:gap-2 sm:w-fit sm:justify-start'
            : 'flex-wrap  justify-around  gap-4  py-2')
        }
      >
        {createPostState && (
          <React.Fragment>
            {MakePostLinkOne().map(({ icon, ref, tip }, i) => (
              <button
                data-tip
                data-for={tip}
                key={i}
                ref={ref}
                className={`${
                  i === 0 && 'text-green-600  hover:bg-[#49ec4e1c]'
                } ${i === 1 && 'text-blue-600  hover:bg-[#49a0ec1c]'} ${
                  i === 2 && 'text-yellow-600  hover:bg-[#ece6491c]'
                } ${i === 3 && 'text-red-600  hover:bg-[#e549491c]'} ${
                  i === 4 && 'text-blue-400  hover:bg-[#498aec1c]'
                }  text-2xl p-2 rounded-full`}
                onClick={(e) =>
                  IconHandler({
                    e,
                    ref,
                    setAddPictureState,
                    setTagPeopleState,
                    setCreatePostState,
                    tagPeopleState,
                    createPostState,
                    setGoBack,
                  })
                }
              >
                {icon}
                <ToolTip
                  title={tip}
                  effect={`float`}
                  place={`top`}
                  id={tip}
                  type={`dark`}
                />
              </button>
            ))}

            <p
              data-tip
              data-for='more'
              className='text-2xl text-gray-500b rounded-full p-1.5 hover:bg-light300  cursor-pointer dark:hover:bg-dark300 dark:text-thdark500'
              onClick={(e) => {
                e.stopPropagation();
                forward(setCreatePostState, setAddToYourState);
              }}
            >
              <Icon.HiDotsHorizontal />
            </p>
            <ToolTip
              title={`more`}
              id={`more`}
              effect={`float`}
              place={`top`}
            />
          </React.Fragment>
        )}
        {addToYourState && (
          <React.Fragment>
            {MakePostLinkTwo().map(({ icon, title }, i) => (
              <article
                key={i}
                className={`${
                  i === 0 && 'text-green-600  hover:bg-[#49ec4e1c]'
                } ${i === 1 && 'text-blue-600  hover:bg-[#49a0ec1c]'} ${
                  i === 2 && 'text-yellow-600  hover:bg-[#ece6491c]'
                } ${i === 3 && 'text-red-600  hover:bg-[#e549491c]'} ${
                  i === 4 && 'text-blue-400  hover:bg-[#498aec1c]'
                }  ${
                  i === 5 && 'text-purple-600  hover:bg-[#e549c61c]'
                } flex flex-row items-center  gap-2 pl-2 sm:pr-12 py-2 w-[40%] hover:bg-light300 rounded-md cursor-pointer `}
              >
                <p
                  className={`${i === 0 && 'text-green-600 '} ${
                    i === 1 && 'text-blue-600'
                  } ${i === 2 && 'text-yellow-600'} ${
                    i === 3 && 'text-red-600'
                  } ${i === 4 && 'text-blue-400'} ${
                    i === 5 && 'text-purple-600'
                  } text-3xl `}
                  onClick={(e) => IconHandler(e)}
                >
                  {icon}
                </p>
                <h5 className='font-medium text-xs xs:text-md mdsm:text-lg '>
                  {title}
                </h5>
              </article>
            ))}
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default PostCreationLinks;
