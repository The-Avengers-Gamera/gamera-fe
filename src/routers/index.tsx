import React from 'react';
import { RouteObject } from 'react-router-dom';
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

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/games', element: <Game /> },
      {
        path: '/news',
        element: <News />,
        children: [
          { path: ':platform', element: <News /> },
          { path: 'news/:id', element: <News /> },
        ],
      },
      {
        path: '/reviews',
        element: <Review />,
        children: [
          { path: ':platform', element: <Review /> },
          { path: 'review/:id', element: <Review /> },
        ],
      },
      { path: '/settings', element: <Settings /> },
      {
        path: '/post',
        element: <Post />,
        children: [{ path: ':type', element: <Post /> }],
      },

      {
        path: '/account',
        element: <>user page</>,
        children: [
          {
            path: 'my-articles',
            element: <>remember to replace...</>,
            children: [{ path: 'article/:id', element: <>remember to replace...</> }],
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
      { path: '*', element: <NoMatch /> },
    ],
  },
];

export default routes;
