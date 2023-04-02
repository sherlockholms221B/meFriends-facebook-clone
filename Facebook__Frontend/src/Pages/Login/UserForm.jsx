import { Input } from '../../Components'
import { FormWrapper } from './FormWrapper'

export function UserForm({
  firstName,
  lastName,
  email,
  newPassword,
  updateFields,
  password,
  wrongeDataType,
}) {
  return (
    <FormWrapper title='User Details'>
      <section className='w-full h-fit flex-col flex justify-center p-4 items-center gap-y-5'>
        {wrongeDataType.isOn && (
          <h2 className='text-red-600 text-md tracking-wide capitalize'>
            {wrongeDataType.msg}
          </h2>
        )}
        <Input
          required
          autoFocus
          name='login'
          type='text'
          value={firstName}
          placeholder={'First name'}
          handleChange={(e) => updateFields({ firstName: e.target.value })}
        />
        <Input
          required
          type='text'
          name='login'
          value={lastName}
          placeholder={'Last name'}
          handleChange={(e) => updateFields({ lastName: e.target.value })}
        />
        <Input
          placeholder={'Email adress or phone number'}
          name='login'
          required
          type='email'
          value={email}
          handleChange={(e) => updateFields({ email: e.target.value })}
        />
        <Input
          placeholder={'Your password'}
          autoFocus
          required
          name='login'
          type='password'
          value={password}
          handleChange={(e) => updateFields({ password: e.target.value })}
        />
        <Input
          placeholder={'confirm password'}
          required
          name='login'
          min={1}
          type='password'
          value={newPassword}
          handleChange={(e) => updateFields({ newPassword: e.target.value })}
        />
      </section>
    </FormWrapper>
  )
}
