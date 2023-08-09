import { FaCloud } from 'react-icons/fa'
import { FormWrapper } from './FormWrapper'
import { useState } from 'react'
import { upload } from '../..'

export function CoverImageUpload({
  backgroundImage,
  setBackgroundImage,
  wrongeDataType,
}) {
  const [isloading, setisloading] = useState(false);
  const [msg, setMsg] = useState('');
  return (
    <FormWrapper
      title='Upload your background image. This can be change at your convinient time.'
      qustion='Select background image.'
    >
      <section className='w-full h-fit flex-col flex justify-center p-4 items-center gap-y-5'>
        <div className='flex flex-col justify-center items-center outline-none w-full h-fit'>
          {isloading ? (
            <p className='text-lg capitalize tracking-wide font-medium dark:text-thdark500 text-gray-800 '>
              uploading...
            </p>
          ) : (
            <section className='w-full'>
              {backgroundImage?.url ? (
                <section
                  className=' 
                flex flex-col w-full h-full justify-center items-center gap-y-8'
                >
                  <img
                    src={backgroundImage?.url}
                    className='h-60 w-full bg-black object-cover'
                    alt='userProfile'
                  />
                  {wrongeDataType.msg && (
                    <p className='text-red-700 tracking-wide capitalize'>
                      {wrongeDataType.msg}
                    </p>
                  )}
                  {msg && (
                    <h5 className='text-md text-lg capitalize text-blue-600 tracking-wide'>
                      {msg}
                    </h5>
                  )}
                </section>
              ) : (
                <label className='cursor-pointer'>
                  <div className='flex flex-col justify-center w-full items-center h-full '>
                    <div className='flex flex-col justify-center items-center  text-center'>
                      <p className='font-bold text-xl'>
                        <FaCloud className='text-6xl text-gray-300' />
                      </p>
                    </div>
                    <p className='bg-[#0c4aad47] hover:bg-[#0c4aad6b] text-center mt-2 rounded text-white text-md font-medium px-6 py-2 w-53'>
                      select file
                    </p>
                  </div>
                  <input
                    type='file'
                    required
                    name='profile'
                    className='w-0 h-0'
                    onChange={async (e) => {
                      const selectedFile = e.target.files[0];
                      const { data, msg } = await upload(
                        selectedFile,
                        isloading,
                        setisloading
                      );
                      setBackgroundImage(data);
                      setMsg(msg);
                    }}
                  />
                </label>
              )}
            </section>
          )}
        </div>
      </section>
    </FormWrapper>
  );
}
