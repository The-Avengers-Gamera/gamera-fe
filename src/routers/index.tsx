import { RouteObject } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { Role } from '@/constants/role';
import Root from '@/layouts/Root';
import Home from '@/pages/Home';
import Game from '@/pages/Game';
import News from '@/pages/News';
import Review from '@/pages/Review';
import Settings from '@/pages/Settings';
import NoMatch from '@/pages/NoMatch';
import Post from '@/pages/Post';
import OurTeam from '@/pages/OurTeam';
import Term from '@/pages/Term';
import Privacy from '@/pages/Privacy';
import ContactUs from '@/pages/ContactUs';
import AboutUs from '@/pages/AboutUs';
import Article from '@/pages/Article';
import UserProfile from '@/pages/UserProfile';
import MyLikes from '@/pages/MyLikes';
import MyComments from '@/pages/MyComments';
import MyArticles from '@/pages/MyArticles';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/games', element: <Game /> },
      { path: '/news', element: <News /> },
      { path: '/reviews', element: <Review /> },
      { path: '/reviews/:platform', element: <Review /> },
      { path: '/article/:id', element: <Article /> },
      {
        path: '/settings',
        element: (
          <ProtectedRoute allowedRoles={[Role.USER]}>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: '/post',
        element: (
          <ProtectedRoute allowedRoles={[Role.EDITOR_NEWS, Role.EDITOR_REVIEW]}>
            <Post />
          </ProtectedRoute>
        ),
        children: [{ path: ':type', element: <Post /> }],
      },
      { path: '/profile/', element: <UserProfile /> },
      {
        path: '/profile/my-likes',
        element: <MyLikes />,
        children: [{ path: ':id', element: <>remember to replace...</> }],
      },
      {
        path: '/profile/my-comments',
        element: <MyComments />,
        children: [{ path: ':id', element: <>remember to replace...</> }],
      },
      {
        path: '/profile/my-articles',
        element: <MyArticles />,
        children: [{ path: ':id', element: <>remember to replace...</> }],
      },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/contact-us', element: <ContactUs /> },
      { path: '/privacy', element: <Privacy /> },
      { path: '/term', element: <Term /> },
      { path: '/our-team', element: <OurTeam /> },
      { path: '/404', element: <NoMatch /> },
      { path: '*', element: <NoMatch /> },
    ],
  },
];

export default routes;
