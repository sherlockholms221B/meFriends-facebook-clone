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
              name: 'slug',
              tittle: 'Slug',
              type: 'slug',
              options: {
                source: 'filetype',
              },
            },
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
              name: 'slug',
              tittle: 'Slug',
              type: 'slug',
              options: {
                source: 'filetype',
              },
            },
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
      name: 'coments',
      title: 'Coments',
      type: 'array',
      of: [{ type: 'coment' }],
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
      name: 'taged',
      title: 'Taged',
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
      name: 'postaudience',
      title: 'Post Audience',
      type: 'string',
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
}
