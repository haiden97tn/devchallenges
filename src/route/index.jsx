import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminLayout from './../layouts/AdminLayout';
import SiteLayout from './../layouts/SiteLayout';

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/admin'>
                    <AdminLayout />
                </Route>
                <Route path='/'>
                    <SiteLayout />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default router;