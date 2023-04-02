import { Input } from '../../Components'
import { FormWrapper } from './FormWrapper'

export function AddressForm({ country, city, state, zip, updateFields }) {
  return (
    <FormWrapper title='Address optional'>
      <section className='w-full h-fit flex-col flex justify-center p-4 items-center gap-y-5'>
        <Input
          autoFocus
          name='login'
          type='country'
          value={country}
          placeholder={'country'}
          handleChange={(e) => updateFields({ country: e.target.value })}
        />
        <Input
          name='login'
          type='text'
          value={state}
          placeholder={'state'}
          handleChange={(e) => updateFields({ state: e.target.value })}
        />
        <Input
          type='text'
          name='login'
          value={city}
          placeholder={'city'}
          handleChange={(e) => updateFields({ city: e.target.value })}
        />
        <Input
          type='text'
          name='login'
          value={zip}
          placeholder={'zip code'}
          handleChange={(e) => updateFields({ zip: e.target.value })}
        />
      </section>
    </FormWrapper>
  )
}
