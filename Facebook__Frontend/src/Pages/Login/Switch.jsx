import { useEffect, useState } from 'react'
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import { useMultistepForm } from './useMultistepForm'
import { LogIn } from './In'
import { UserForm } from './UserForm'
import { ProfileUpload } from './ImageUpload'
import { createUser } from './index'
import useAuthStore from '../../Store/AuthStore'
import { useNavigate } from 'react-router-dom'
import { CoverUpload } from './CoverImage'

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
      <AddressForm
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
    if (currentStepIndex === 1) {
      information.password === information.newPassword
        ? next()
        : setWrongeDataType({ isOn: true, msg: 'password mismatch' })
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
    console.log(data, msg)
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
    <section className='relative bg-white dark:bg-darkSecondary dark:border-borderDark border mt-1 rounded-sm w-[450px] '>
      <form onSubmit={onSubmit}>
        {!isFirstStep && (
          <div className='absolute top-2 right-2 dark:text-white tracking-tighter text-gray-800 text-md font-semibold'>
            {currentStepIndex} / {steps.length - 1}
          </div>
        )}
        {step}
        <div className='mt-4 flex gap-4 justify-between items-center mx-2 mb-2'>
          {!isFirstStep && (
            <>
              <button
                type='button'
                onClick={back}
                className='dark:text-white text-gray-800 font-medium tracking-wider dark:bg-darkPrimary px-2.5 py-1.5 rounded-[5px] bg-white'
              >
                Back
              </button>
              <button
                type='submit'
                className='dark:text-white text-gray-800 font-medium tracking-wider bg-blue-700 px-2.5 py-1.5 rounded-[5px] '
              >
                {isLastStep ? 'Finish' : 'Next'}
              </button>
            </>
          )}
        </div>
      </form>
    </section>
  )
}

export default Main
