import { Input } from '../../../../Components';
import { FormWrapper } from './FormWrapper';

export function Password({
  newPassword,
  password,
  updateFields,
  wrongeDataType,
}) {
  return (
    <FormWrapper
      title='Enter the password your know is most secure. We surgest using uppercase latters, numbers and special case latters like "@" or "?". You can change this later.'
      qustion='Enter your phone number or email.'
    >
      <section className='w-full h-fit flex-col flex justify-center py-4 px-1.5 items-center gap-y-5'>
        {wrongeDataType.msg && (
          <p className='text-red-700 tracking-wide'> {wrongeDataType.msg} </p>
        )}
        <Input
          placeholder={'New password'}
          autoFocus
          required
          name='login'
          type='password'
          value={password}
          handleChange={(e) => updateFields({ password: e.target.value })}
        />
        <Input
          placeholder={'Confirm password'}
          required
          name='login'
          min={1}
          type='password'
          value={newPassword}
          handleChange={(e) => updateFields({ newPassword: e.target.value })}
        />{' '}
      </section>
    </FormWrapper>
  );
}
