import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { motion } from 'framer-motion'

import { Input } from '../Components/index'

const Login = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  })
  const [togleLogin, setTogleLogin] = useState(false)

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    <div className='relative w-full h-full flex flex-row flex-nowrap gap-10 items-center bg-[#E3E3E3]'>
      <div className='border-4 border-red-500 w-1/2 h-[100vh]'>
        <div className='flex flex-col justify-center items-start  '>
          <h2 className='text-3xl text-blue-500 font-bold '>backface</h2>
          <p className='text-gray-600 text-2xl font-semibold'>
            backface helps you connect and share with people in your life
          </p>
        </div>
      </div>
      <div className='border-4 border-red-500 w-1/2 h-[100vh] flex justify-center items-center'>
        <div className='shadow-lg rounded-md p-4 bg-white w-8/12  flex flex-col gap-5 items-center'>
          <Input
            value={value.email}
            handleChange={handleChange}
            placeholder={'Email adress or phone number'}
            name={'email'}
            type={'text'}
          />
          <Input
            value={value.password}
            handleChange={handleChange}
            placeholder={'Password'}
            name={'login'}
            type={'text'}
          />
          <button className='text-white font-bold bg-blue-500 w-full rounded-md p-2 text-xl hover:bg-blue-600'>
            Log in
          </button>
          <p className='text-md  text-blue-500 hover:underline cursor-pointer'>
            Forgotten password?
          </p>
          <div className='h-[2px] w-full bg-[#E3E3E3] ' />
          <button
            className='capitalize text-white font-bold text-xl p-2 rounded-md bg-green-500 hover:bg-green-600'
            onClick={() => setTogleLogin(true)}
          >
            create new account
          </button>
        </div>
      </div>

      {togleLogin && (
        <motion.div
          className='absolute opacity-0 bg-red-500 w-screen h-screen z-10 backdrop-blur flex justify-center items-center'
          whileInView={{ opacity: [0, 1], scale: [0, 1] }}
          transition={{ duration: 0.4, ease: 'linear' }}
        >
          <div className='bg-white shadow-lg w-[480px] rounded-md h-min'>
            <div className='rounded-t-md w-full h-full flex justify-between items-center border-b-2 border-gray-300'>
              <div className='h-full flex flex-col items-start px-4 py-2'>
                <h1 className='text-3xl font-bold text-gray-700'>Sign Up</h1>
                <p className='text-md text-gray-400'>it's quick and easy.</p>
              </div>
              <div className='h-full text-center font-extrabold text-3xl text-gray-700 px-4 py-2 cursor-pointer'>
                <MdOutlineClose onClick={() => setTogleLogin(false)} />
              </div>
            </div>
            <div className='p-2 h-full w-full flex flex-col gap-3'>
              <div
                className='
              '
              >
                <Input
                  value={value.password}
                  handleChange={handleChange}
                  placeholder={'Password'}
                  name={'login'}
                  type={'text'}
                />
              </div>
              <Input
                value={value.password}
                handleChange={handleChange}
                placeholder={'Password'}
                name={'login'}
                type={'text'}
              />
              <Input
                value={value.password}
                handleChange={handleChange}
                placeholder={'Password'}
                name={'login'}
                type={'text'}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Login
