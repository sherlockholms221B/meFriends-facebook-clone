export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'UserName',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'ProfileImage',
      type: 'image',
    },
    {
      name: 'coverImage',
      title: 'CoverImage',
      type: 'image',
    },
  ],
}
