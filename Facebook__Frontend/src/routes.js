import { PostDetails } from './Pages/Posts-Info';
import { ProfileOverviewCard } from './Pages/User-Profile-View';
import { SearchResultsView } from './Pages/Search-Results-Page';
import { StoryMediaViewer } from './Pages/Narrative-Media-Display';

//
// import { Login } from './Pages';
import { Friends, Saved, Memories, MarketPlace, Watch } from './Controllers';
// import MobileMessages from './Pages/Messages/MobileMessages';
// import MobileNotificatons from './Pages/Notifications/MobileNotificatons';

const layoutRoute = [
  {
    route: '/dashbord/api-me-friends/login',
    // component: <Login />,
  },
  {
    route: '/profile',
    component: <ProfileOverviewCard />,
  },
  {
    route: '/post/details/photo',
    component: <PostDetails />,
  },
  {
    route: '/story/details/photo',
    component: <StoryMediaViewer />,
  },
  {
    route: '/api/search/random',
    component: <SearchResultsView />,
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
  {
    route: '/mefriends-messages-all/room',
    // component: <MobileMessages />,
  },
  {
    route: '/mefriends-notifications-all/notify-me',
    // component: <MobileNotificatons />,
  },
];

export default layoutRoute;
