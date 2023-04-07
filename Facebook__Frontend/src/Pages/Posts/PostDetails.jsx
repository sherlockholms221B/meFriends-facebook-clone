import * as React from 'react'

//import react-router-dom module
import { useNavigate } from 'react-router-dom'

//import components
import {
  COMBTN,
  Comments,
  Input,
  Like,
  Profile,
  THRDot,
} from '../../Components'
import PSTIMG from './PSTIMG'

//import icons from utils
import { Icon } from '../../utils/Icon'

const PostDetails = () => {
  const navigate = useNavigate()
  const [isComment, setIsComment] = React.useState(true)
  const [viewMore, setViewMore] = React.useState(true)
  const [value, setValue] = React.useState('')
  const PostBtn1 =
    'flex flex-row flex-nowrap justify-center  items-center mid_small:dark:hover:bg-darkComplementry mid_small:hover:bg-primary bg-primary dark:bg-darkComplementry mid_small:dark:bg-inherit mid_small:rounded-[3px] rounded-full px-6 xtra_small:px-8 py-2 cursor-pointer '
  const PostBtnI =
    'text-xl font-bold text-gray-500 mr-1  dark:text-heading_dark_gray'

  const PostBtnT =
    'hidden mid_small:block text-sm xtra_small:text-md text-gray-500 font-semibold dark:text-heading_dark_gray'

  return (
    <React.Fragment>
      <section className='flex justify-between items-center py-1 pr-2 border-b-2 dark:border-borderDark dark:bg-darkSecondary '>
        <div className='flex items-center justify-start w-fit gap-3 ml-4 '>
          <Icon.MdClose
            className='text-3xl dark:text-heading_dark_white'
            onClick={() => navigate(-1)}
          />
          <Icon.MdOutlineFacebook className='text-5xl shade_blue' />
        </div>
        <THRDot />
      </section>
      <section className='flex flex-col tablet:flex-row items-center w-screen h-screen '>
        <section className='w-full bg-black h-full text-white relative flex justify-center'>
          <section className='absolute flex justify-end items-center top-0 right-0 w-full'>
            <div className='flex items-center justify-end w-fit gap-8 mr-4 py-1'>
              <Icon.BiZoomIn className='text-2xl text-heading_dark_white' />
              <Icon.BiZoomOut className='text-2xl text-heading_dark_white' />
              <Icon.BsTagsFill className='text-2xl text-heading_dark_white' />
              <Icon.FaExpandAlt className='text-lg text-heading_dark_white' />
            </div>
          </section>
          <PSTIMG />
        </section>
        <div className='w-full tablet:w-550 dark:bg-darkSecondary h-full overflow-y-auto'>
          <div className='flex flex-row flex-nowrap justify-between items-center mx-2 p-2 border-b-2 border-gray-300 dark:border-[#3a3b3c]'>
            <div className='flex items-center justify-center'>
              <Icon.AiOutlineLike className='mr-1 blue_text' />
              <p className='text-sm text-gray-500 '>234</p>
            </div>
            <div className='flex items-center justify-center'>
              <p className='mr-1 text-sm text-gray-500 '>22 comments</p>
            </div>
          </div>
          <section
            className={`flex flex-row flex-nowrap justify-around px-2 py-1 items-center mx-2 border-b-2 border-gray-300 dark:border-borderDark`}
          >
            <Like PostBtn1={PostBtn1} PostBtnI={PostBtnI} PostBtnT={PostBtnT} />
            <COMBTN
              isComment={isComment}
              setIsComment={setIsComment}
              PostBtn1={PostBtn1}
              PostBtnI={PostBtnI}
              PostBtnT={PostBtnT}
            />
          </section>
          <section className='tablet:max-h-[73%] max-h-[53%] overflow-auto home_scroll'>
            <Comments
              postDetail={false}
              isComment={isComment}
              setIsComment={setIsComment}
              viewMore={viewMore}
              setViewMore={setViewMore}
              value={value}
              setValue={setValue}
            />
          </section>
          <div className='flex flex-row flex-nowrap gap-2 items-center px-3 pt-2 pb-3 border-t-2 dark:border-borderDark'>
            <Profile
              link='/backface/api/profile'
              style='object-cover w-8 h-8 rounded-full'
            />
            <Input
              handleChange={(e) => setValue(e.target.value)}
              value={value}
              type={`text`}
              name={`comment`}
              placeholder={`Write a comment`}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default PostDetails
