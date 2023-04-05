import { Login, PostDetails, Profile, STPage, StoryDetails } from './Pages'
import { Friends, Saved, Memories, MarketPlace, Watch } from './Controllers'

const layoutRoute = [
  {
    route: '/dashbord/api-me-friends/login',
    component: <Login />,
  },
  {
    route: '/backface/api/profile',
    component: <Profile />,
  },
  {
    route: '/backface/api/profile',
    component: <PostDetails />,
  },
  {
    route: '/story/details/photo',
    component: <StoryDetails />,
  },
  {
    route: '/api/search/random',
    component: <STPage />,
  },
  {
    route: '/menu/friends/fbid',
    component: <Friends />,
  },
  {
    route: '/menu/saved/fbid',
    component: <Saved />,
  },
  {
    route: '/menu/marketplace/fbid',
    component: <MarketPlace />,
  },
  {
    route: '/menu/memories/fbid',
    component: <Memories />,
  },
  {
    route: '/menu/watch/fbid',
    component: <Watch />,
  },
]

export default layoutRoute
