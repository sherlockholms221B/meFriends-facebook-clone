export default {
  name: 'singleMessage',
  title: 'Single Message',
  type: 'object',
  fields: [
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'string',
    },
    {
      name: 'sender',
      title: 'Who Sent Message',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
        },
      ],
    },

    {
      name: 'subject',
      title: 'Message Subject',
      type: 'string',
    },
    {
      name: 'previousMessage',
      title: 'Previous Message',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'chat' }],
        },
      ],
    },
    {
      name: 'readBy',
      title: 'Is The Chat Seen',
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
