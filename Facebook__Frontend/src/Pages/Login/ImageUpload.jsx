import { FaCloud } from 'react-icons/fa'
import { FormWrapper } from './FormWrapper'
import { useState } from 'react'
import { upload } from '.'

export function ProfileUpload({ updateFields, profile, setProfile }) {
  const [isloading, setisloading] = useState(false)
  const [msg, setMsg] = useState('')
  return (
    <FormWrapper
      title='Select an image to use as your profile image. Click the select button to upload your background image'
      qustion='Select a profile image'
    >
      <section className='w-full h-fit flex-col flex justify-center p-4 items-center gap-y-5'>
        <div className='flex flex-col justify-center items-center outline-none w-full h-fit'>
          {isloading ? (
            <p className='text-lg capitalize tracking-wide font-medium dark:text-heading_dark_white text-gray-800 '>
              uploading...
            </p>
          ) : (
            <section className=''>
              {profile?.url ? (
                <section className=' rounded-xl flex flex-col w-fit h-full justify-center items-center gap-y-8'>
                  <img
                    src={profile?.url}
                    className='rounded-full h-60 w-60 bg-black object-cover'
                    alt='userProfile'
                  />

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

                    <p className='bg-[#0c4aad47] hover:bg-[#0c4aad6b] text-center mt-2 rounded text-white text-md font-medium py-2 px-6 w-53'>
                      Select file
                    </p>
                  </div>
                  <input
                    type='file'
                    name='profile'
                    required
                    className='w-0 h-0'
                    onChange={async (e) => {
                      const selectedFile = e.target.files[0]
                      const { data, msg } = await upload(
                        selectedFile,
                        isloading,
                        setisloading
                      )
                      setProfile(data)
                      setMsg(msg)
                    }}
                  />
                </label>
              )}
            </section>
          )}
        </div>
      </section>
    </FormWrapper>
  )
}
