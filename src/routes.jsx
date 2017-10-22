import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {View as Chat} from 'chat/index';
import {View as Home} from 'home/index';
import {View as NotFound} from 'not-found/index';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/chat" component={Chat}/>
        <Route component={NotFound}/>
    </Switch>
);

export default Routes;