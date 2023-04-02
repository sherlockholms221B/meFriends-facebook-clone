import { FormWrapper } from './FormWrapper'
import { Input } from '../../Components/index'
import { useMultistepForm } from './useMultistepForm'
import { GetUser } from './index'
import useAuthStore from '../../Store/AuthStore'
import { useNavigate } from 'react-router-dom'

export function LogIn({ email, password, updateFields }) {
  const navigate = useNavigate()
  const { addUser } = useAuthStore()

  const { next } = useMultistepForm([])
  return (
    <FormWrapper title='Log in to Mefriends'>
      <section className='w-full h-fit flex-col flex justify-center p-4 items-center gap-y-5'>
        <Input
          placeholder={'Email adress or phone number'}
          name='login'
          autoFocus
          type='email'
          value={email}
          handleChange={(e) => updateFields({ email: e.target.value })}
        />
        <Input
          placeholder={'Your password'}
          autoFocus
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
            localStorage.setItem('user', data[0])
            console.log(data, msg)
          }}
          className='text-white font-bold bg-blue-500 w-full rounded-md p-2 text-xl hover:bg-blue-600'
        >
          Log in
        </button>
        <p className='text-md  text-blue-500 hover:underline cursor-pointer'>
          Forgotten password?
        </p>
        <div className='h-[2px] w-full bg-[#E3E3E3] dark:bg-darkComplementry ' />
        <button
          className='capitalize text-white font-bold text-xl p-2 rounded-md bg-green-500 hover:bg-green-600'
          onClick={() => next()}
        >
          create new account
        </button>
      </section>
    </FormWrapper>
  )
}
