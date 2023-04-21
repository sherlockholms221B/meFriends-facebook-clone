//import formwrapper
import { FormWrapper } from './FormWrapper'

//import component
import { Input } from '../../Components/index'
import { useMultistepForm } from './useMultistepForm'
import { GetUser } from './index'
import useAuthStore from '../../Store/AuthStore'
import { useNavigate } from 'react-router-dom'
import { Demaceta } from '../../Components/RDOMC'

export function LogIn({
  email,
  password,
  updateFields,
  setWrongeDataType,
  wrongeDataType,
}) {
  const navigate = useNavigate()
  const { addUser } = useAuthStore()

  const { next } = useMultistepForm([])
  return (
    <FormWrapper title=''>
      <section
        role='button'
        onClick={() => {}}
        className='absolute top-0 right-0 left-0 bg-[#0c4aad47] w-full flex flex-row justify-center items-center py-3 px-2'
      >
        <h3 className='text-blue-700 font-semibold text-xs xs:text-sm mdxs:text-md tracking-normal'>
          Get meFriends for andriod and browse faster
        </h3>
      </section>
      <section className='w-full h-fit flex-col flex justify-center mdxs:p-4 px-2 items-center gap-y-5'>
        {wrongeDataType.msg && (
          <p className='text-red-700 tracking-wide capitalize'>
            {wrongeDataType.msg}
          </p>
        )}
        <Input
          placeholder={'Email adress or phone number'}
          name='login'
          autoFocus
          type='email'
          value={email}
          handleChange={(e) => updateFields({ email: e.target.value })}
        />
        <Input
          placeholder={'Password'}
          name='login'
          type='password'
          value={password}
          handleChange={(e) => updateFields({ password: e.target.value })}
        />
        <button
          type='button'
          onClick={async () => {
            const { data, msg } = await GetUser(
              { email, password },
              addUser,
              navigate
            )
            setWrongeDataType({ ...wrongeDataType, msg: msg })
            localStorage.setItem('user', data[0])
          }}
          className='text-white font-bold bg-blue-800 w-full rounded-md p-2 text-xl hover:bg-blue-700'
        >
          Log in
        </button>
        <p className='text-md  text-blue-500 hover:underline cursor-pointer'>
          Forgotten password?
        </p>
        <Demaceta />
        <button
          className=' text-white font-bold xlg:text-xl text-md p-2 rounded-md bg-green-500 hover:bg-green-600 w-[90%]'
          onClick={() => next()}
        >
          Create new account
        </button>
      </section>
    </FormWrapper>
  )
}
