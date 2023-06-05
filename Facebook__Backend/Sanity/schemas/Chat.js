export default {
  name: 'chat',
  title: 'Chat Message',
  type: 'document',
  fields: [
    {
      name: 'whoIsIn_id',
      title: 'Who is in conversation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
        },
      ],
    },
    {
      name: 'isGroupChat',
      title: 'Is Group Chat',
      type: 'boolean',
      default: false,
    },
    {
      name: 'latestMessage',
      title: 'Latest Message',
      type: 'array',
      of: [
        {
          type: 'singleMessage',
        },
      ],
    },
    {
      name: 'recivers',
      title: 'Message Recivers',
      type: 'reference',
      to: [
        {
          type: 'user',
        },
      ],
    },
    {
      name: 'groupAdmin',
      title: 'Group Admin',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
        },
      ],
    },
  ],
}
