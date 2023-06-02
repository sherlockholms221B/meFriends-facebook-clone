export default {
  name: 'messages',
  title: 'Messages',
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
      name: 'message',
      title: 'Single Message',
      type: 'array',
      of: [
        {
          type: 'singleMessage',
        },
      ],
    },
  ],
}
