export default {
  name: 'stories',
  title: 'Stories',
  type: 'document',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'array',
      of: [{ type: 'file' }],

      options: {
        hotspot: true,
      },
    },
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'like',
      title: 'Like',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'user',
            },
          ],
        },
      ],
    },
  ],
}
