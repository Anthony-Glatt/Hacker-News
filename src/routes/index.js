import React, { Suspense } from 'react';
import {
Route,
BrowserRouter,
} from 'react-router-dom';
import Navi from '../components/navi';
import TopStories from '../containers/top-stories';
import BestStories from '../containers/best-stories';
import NewStories from '../containers/new-stories';

export const ROUTES = [
  {
    path: '/containers/top-stories',
    label: 'Top Stories',
    component: TopStories,
  },
  {
    path: '/containers/best-stories',
    label: 'New Stories',
    component: BestStories,
  },
  {
    path: '/containers/new-stories',
    label: 'Best Stories',
    component: NewStories,
  },
];

const Router = () => (
  <BrowserRouter>
    <Navi routes={ROUTES} />
    {ROUTES.map((route) => {
        return (
        <Suspense fallback={() => 'Suspense loading...'} key={route.label}>
            <Route path={route.path} component={route.component} />
        </Suspense>
        );
    })}
  </BrowserRouter>
);

export default Router;