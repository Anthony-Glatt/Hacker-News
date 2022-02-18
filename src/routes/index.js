import React, { Suspense } from 'react';
import {
Route,
BrowserRouter,
} from 'react-router-dom';

import Navi from 'src/components/navi';

export const ROUTES = [
    {
        path: '/todo',
        label: 'ToDo',
        component: React.lazy(() => import('src/components/todo')),
    },
];

const Router = () => (
    <BrowserRouter>
        <Navi routes={ROUTES} />
        {ROUTES.map((route) => {
        return (
            <Suspense fallback={() => 'Suspense loading...'} key={route.label}>
            <Route exact path={route.path} component={route.component} />
            </Suspense>
        );
        })}
    </BrowserRouter>
);

export default Router;