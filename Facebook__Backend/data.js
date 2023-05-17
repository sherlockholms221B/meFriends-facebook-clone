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


const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: 'John Doe',
        email: 'john@example.com',
      },
      {
        name: 'Piyush',
        email: 'piyush@example.com',
      },
    ],
    _id: '617a077e18c25468bc7c4dd4',
    chatName: 'John Doe',
  },
  {
    isGroupChat: false,
    users: [
      {
        name: 'Guest User',
        email: 'guest@example.com',
      },
      {
        name: 'Piyush',
        email: 'piyush@example.com',
      },
    ],
    _id: '617a077e18c25468b27c4dd4',
    chatName: 'Guest User',
  },
  {
    isGroupChat: false,
    users: [
      {
        name: 'Anthony',
        email: 'anthony@example.com',
      },
      {
        name: 'Piyush',
        email: 'piyush@example.com',
      },
    ],
    _id: '617a077e18c2d468bc7c4dd4',
    chatName: 'Anthony',
  },
  {
    isGroupChat: true,
    users: [
      {
        name: 'John Doe',
        email: 'jon@example.com',
      },
      {
        name: 'Piyush',
        email: 'piyush@example.com',
      },
      {
        name: 'Guest User',
        email: 'guest@example.com',
      },
    ],
    _id: '617a518c4081150716472c78',
    chatName: 'Friends',
    groupAdmin: {
      name: 'Guest User',
      email: 'guest@example.com',
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
      },
      {
        name: 'Piyush',
        email: 'piyush@example.com',
      },
    ],
    _id: '617a077e18c25468bc7cfdd4',
    chatName: 'Jane Doe',
  },
  {
    isGroupChat: true,
    users: [
      {
        name: 'John Doe',
        email: 'jon@example.com',
      },
      {
        name: 'Piyush',
        email: 'piyush@example.com',
      },
      {
        name: 'Guest User',
        email: 'guest@example.com',
      },
    ],
    _id: '617a518c4081150016472c78',
    chatName: 'Chill Zone',
    groupAdmin: {
      name: 'Guest User',
      email: 'guest@example.com',
    },
  },
]
