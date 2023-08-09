import { Input } from '../../../../Components';
import { FormWrapper } from './FormWrapper';

export function UserForm({
  firstName,
  lastName,
  updateFields,
  wrongeDataType,
}) {
  return (
    <FormWrapper
      title='Enter the name you use in real life'
      qustion="What's your name?"
    >
      <section className='w-full h-fit flex-col flex justify-center py-4 px-1.5 items-center gap-y-5'>
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
          placeholder={'Surname'}
          handleChange={(e) => updateFields({ lastName: e.target.value })}
        />
      </section>
    </FormWrapper>
  );
}
