export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'topic',
      title: 'Topic',
      type: 'string',
    },
    {
      name: 'media',
      type: 'array',
      title: 'Media',
      of: [
        {
          type: 'image',
          title: 'Image',
          description: 'Media content like photos and images.',
        },
        {
          type: 'file',
          title: 'Video',
          description: 'Upload or select a video for the post.',
          accept: 'video/*',
        },
        // You can add more types here, e.g., gif, etc.
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'file', tittle: 'File', type: 'image' },
            { name: 'filetype', title: 'File type', type: 'string' },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'video',
      title: 'Video',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'file', tittle: 'file', type: 'file' },
            { name: 'filetype', title: 'File type', type: 'string' },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    },

    {
      name: 'creatorId',
      title: 'Creator ID',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
        },
      ],
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'comment' }],
    },
    {
      name: 'share',
      title: 'Share',
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
    {
      name: 'tags',
      type: 'array',
      title: 'Tags and Mentions',
      of: [
        {
          type: 'reference',
          description:
            'Tags and mentions of other users or pages within the post.',
          to: [
            {
              type: 'user',
            },
          ],
        },
      ],
    },
    {
      name: 'privacySettings',
      type: 'string',
      title: 'Privacy Settings',
      description: 'Information about the privacy settings of the post.',
      options: {
        list: ['Public', 'Friends Only', 'Custom Audience', 'Private'],
      },
    },
    {
      name: 'subscribers',
      title: 'Subscribers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
        },
      ],
    },
    {
      name: 'friends',
      title: 'Friends',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
        },
      ],
    },
  ],
};
