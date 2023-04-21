import React, { useEffect, useState } from 'react'
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import { useMultistepForm } from './useMultistepForm'
import { Password } from './Passwords'
import { LogIn } from './In'
import { UserForm } from './UserForm'
import { ProfileUpload } from './ImageUpload'
import { createUser } from './index'
import useAuthStore from '../../Store/AuthStore'
import { useNavigate } from 'react-router-dom'
import { CoverUpload } from './CoverImage'
import { Demaceta } from '../../Components/RDOMC'
import { Icon } from '../../utils/Icon'

const INITIAL_DATA = {
  firstName: '',
  lastName: '',
  age: '',
  country: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
  newPassword: '',
  gender: '',
  birthDate: '',
}

const PROFILEIMAGE = {}
const BACKGROUNDIMAGE = {}

function Main() {
  const navigate = useNavigate()
  const { addUser } = useAuthStore()
  const [information, setInformation] = useState(INITIAL_DATA)
  const [profile, setProfile] = useState(PROFILEIMAGE)
  const [backgroundImage, setBackgroundImage] = useState(BACKGROUNDIMAGE)
  const [wrongeDataType, setWrongeDataType] = useState({
    msg: '',
    isOn: false,
  })

  function updateFields(fields) {
    setInformation((prev) => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <LogIn
        {...information}
        updateFields={updateFields}
        setWrongeDataType={setWrongeDataType}
        wrongeDataType={wrongeDataType}
      />,
      <UserForm
        {...information}
        updateFields={updateFields}
        setWrongeDataType={setWrongeDataType}
        wrongeDataType={wrongeDataType}
      />,
      <AccountForm
        {...information}
        updateFields={updateFields}
        setWrongeDataType={setWrongeDataType}
        wrongeDataType={wrongeDataType}
      />,
      <AddressForm
        {...information}
        updateFields={updateFields}
        setWrongeDataType={setWrongeDataType}
        wrongeDataType={wrongeDataType}
      />,
      <Password
        {...information}
        updateFields={updateFields}
        wrongeDataType={wrongeDataType}
      />,
      <ProfileUpload
        {...information}
        profile={profile}
        setProfile={setProfile}
        updateFields={updateFields}
        setWrongeDataType={setWrongeDataType}
        wrongeDataType={wrongeDataType}
      />,
      <CoverUpload
        {...information}
        backgroundImage={backgroundImage}
        setBackgroundImage={setBackgroundImage}
        updateFields={updateFields}
        setWrongeDataType={setWrongeDataType}
        wrongeDataType={wrongeDataType}
      />,
    ])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (currentStepIndex === 4) {
      information.password === information.newPassword
        ? next()
        : setWrongeDataType({ isOn: true, msg: 'Password Mismatch' })
      return
    }
    if (!isLastStep) return next()

    const { data, msg } = await createUser(
      { information },
      profile,
      backgroundImage,
      addUser,
      navigate
    )
    setWrongeDataType({ ...wrongeDataType, msg: msg })
  }

  useEffect(() => {
    const _ = setTimeout(() => {
      setWrongeDataType({ isOn: false, msg: '' })
    }, 4000)

    return () => {
      clearTimeout(_)
    }
  }, [wrongeDataType.msg])

  return (
    <section className=' bg-white dark:bg-dark500 rounded-sm w-full mdxs:w-[450px] md:w-[760px] text-center'>
      {!isFirstStep && (
        <section
          role='button'
          onClick={() => {
            back()
          }}
          className='absolute top-0 right-0 left-0 bg-[#0c4aad47] w-full flex flex-row justify-start gap-4 items-center py-3 px-2'
        >
          <Icon.MdArrowBack className='text-xl mdsm:text-2xl dark:text-thdark500 text-gray-800' />
          <h3 className='dark:text-thdark500 text-gray-800 font-semibold text-xs xs:text-sm mdxs:text-md tracking-normal underline'>
            Join Mefriends
          </h3>
        </section>
      )}
      {isFirstStep && (
        <React.Fragment>
          <Demaceta />
          <h2 className='text-xl text-blue-800 mdxs:text-5xl font-bold tracking-wide mb-3'>
            MeFriends
          </h2>
          <Demaceta />
        </React.Fragment>
      )}
      <form onSubmit={onSubmit} className='w-full'>
        {step}
        <div className='mt-4 mb-2 w-full flex justify-center items-center'>
          {!isFirstStep && (
            <React.Fragment>
              <button
                type='submit'
                className='text-white font-bold bg-blue-800 w-[90%] rounded-md p-2 text-xl hover:bg-blue-700'
              >
                {isLastStep ? 'Finish' : 'Next'}
              </button>
            </React.Fragment>
          )}
        </div>
      </form>
    </section>
  )
}

export default Main
