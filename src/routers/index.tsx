import React from 'react';
import { RouteObject } from 'react-router-dom';
import Root from '@/layouts/Root';
import Home from '@/pages/Home';
import Game from '@/pages/Game';
import News from '@/pages/News';
import Review from '@/pages/Review';
import Settings from '@/pages/Settings';
import NoMatch from '@/pages/NoMatch';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/game', element: <Game /> },
      { path: '/news', element: <News /> },
      { path: '/review', element: <Review /> },
      { path: '/settings', element: <Settings /> },
      { path: '*', element: <NoMatch /> },
    ],
  },
];

export default routes;
