import crypto from 'crypto'

export const posts = [
  {
    userName: 'count valdiago',
    postedBy: {
      userName: 'count valdiago',
      profileImage: 'profile image',
    },
    image: [{ file: {} }, { file: {} }],
    topic:
      'Your condition has made many people run away from you,but listen to me. Before 2 months time they will beg for your attention.',
    audience: 'public',
    _id: crypto.randomUUID(),
    userId: crypto.randomUUID(),
    comments: [
      {
        postedBy: {
          userName: 'chidimma ezeugwu chibuli',
          profileImage: 'profile image',
        },
        comments: 'wow this realy nice app. When did you start it?',
        _id: crypto.randomUUID(),
      },
    ],
    vidoe: [
      {
        asset: null,
      },
    ],
  },
  {
    userName: 'chidimma ezeugwu chibuli',
    postedBy: {
      userName: 'chidimma ezeugwu chibuli',
      profileImage: 'profile image',
    },
    image: [{ file: {} }, { file: {} }, { file: {} }],
    topic:
      'When i went to become programer what basic language must be i learn?',
    audience: 'public',
    _id: crypto.randomUUID(),
    userId: crypto.randomUUID(),
    comments: [
      {
        postedBy: {
          userName: 'count valdiago',
          profileImage: 'profile image',
        },
        comments: 'wow this realy nice app. When did you start it?',
        _id: crypto.randomUUID(),
      },
    ],
    vidoe: [
      {
        asset: null,
      },
    ],
  },
]
