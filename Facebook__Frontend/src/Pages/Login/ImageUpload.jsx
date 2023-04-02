import { FaCloud } from 'react-icons/fa'
import { FormWrapper } from './FormWrapper'
import { useState } from 'react'
import { upload } from '.'

export function ProfileUpload({ updateFields, profile, setProfile }) {
  console.log(profile)
  const [isloading, setisloading] = useState(false)
  const [msg, setMsg] = useState('')
  return (
    <FormWrapper title='Profile image'>
      <section className='w-full h-fit flex-col flex justify-center p-4 items-center gap-y-5'>
        <div className='flex flex-col justify-center items-center outline-none w-full h-fit'>
          {isloading ? (
            <p className='text-lg'>uploading</p>
          ) : (
            <section className=''>
              {profile?.url ? (
                <section className=' rounded-xl flex flex-col w-fit h-full justify-center items-center gap-y-8'>
                  <img
                    src={profile?.url}
                    className='rounded-full h-60 w-60 bg-black '
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
                      <p className='text-xl font-semibold'>Upload profile</p>
                    </div>

                    <p className='bg-[#821010] text-center mt-10 rounded text-white text-md font-medium p-2 w-53'>
                      select file
                    </p>
                  </div>
                  <input
                    type='file'
                    name='profile'
                    className='w-0 h-0'
                    onChange={async (e) => {
                      const selectedFile = e.target.files[0]
                      const { data, msg } = await upload(
                        selectedFile,
                        isloading
                      )
                      setProfile(data)
                      setMsg(msg)
                      console.log(data, msg)
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
