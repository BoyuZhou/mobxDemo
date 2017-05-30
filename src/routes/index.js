import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import * as stores from '../stores';
import { App, Login, Homepage } from '../containers';


export default (
    <Provider { ...stores}>
        <Router history={ browserHistory }>
            <Route path="/" component={App} >
                <IndexRoute component={Login} />
                <Route path="/homepage" component={Homepage} />
            </Route>
        </Router>
    </Provider>
)

