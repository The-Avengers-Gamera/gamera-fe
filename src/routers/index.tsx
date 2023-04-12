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
import EmailActivate from '@/components/VerifyResult';
import Verification from '@/pages/VerificationResult/VerificationResult';

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
      { path: '/verification', element: <EmailActivate /> },
      { path: '/activate-email', element: <Verification /> },
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
      {
        path: '/account',
        element: <UserProfile />,
        children: [
          {
            path: 'my-articles',
            element: <>remember to replace...</>,
            children: [{ path: ':id', element: <>remember to replace...</> }],
          },
          {
            path: 'liked',
            element: <>remember to replace...</>,
          },
          {
            path: 'commented',
            element: <>remember to replace...</>,
            children: [{ path: ':id', element: <>remember to replace...</> }],
          },
        ],
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
