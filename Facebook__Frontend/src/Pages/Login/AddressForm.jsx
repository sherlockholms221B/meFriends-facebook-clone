import { Input } from '../../Components'
import { FormWrapper } from './FormWrapper'

export function AddressForm({ email, updateFields }) {
  return (
    <FormWrapper
      title='Enter the mobile number on which you can be contacted. You can hide this from your profile later.'
      qustion='Enter your phone number or email.'
    >
      <section className='w-full h-fit flex-col flex justify-center py-4 px-1.5 items-center gap-y-5'>
        <Input
          placeholder={'Email adress or phone number'}
          name='login'
          required
          type='email'
          value={email}
          handleChange={(e) => updateFields({ email: e.target.value })}
        />
      </section>
    </FormWrapper>
  )
}
