import { Input } from '../../Components'
import { FormWrapper } from './FormWrapper'

export function AccountForm({ birthDate, updateFields, gender }) {
  return (
    <FormWrapper
      title='Enter your date of birth. You can always make this private later.'
      qustion="What's your date of birth?"
    >
      <section className='w-full h-fit flex-col flex justify-center py-4 px-1.5 items-center gap-y-5'>
        <Input
          name='login'
          type='text'
          required
          value={gender}
          placeholder={'Gender'}
          handleChange={(e) => updateFields({ gender: e.target.value })}
        />
        <input
          className='w-full rounded-md p-2 outline-none  bg-primary dark:bg-darkComplementry hover:bg-secondaryWhite  placeholder:text-gray-600 dark:placeholder:text-heading_dark_gray dark:text-white'
          name='login'
          required
          type='date'
          value={birthDate}
          placeholder={'birth date'}
          onChange={(e) => {
            updateFields({ birthDate: e.target.value })
          }}
        />
      </section>
    </FormWrapper>
  )
}
