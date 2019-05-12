import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import Index from './Home';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Privacy from "./Privacy";
import Terms from "./Terms";
import ForgotPassword from "./ForgotPassword";
import Select from "./Select";
import Detail from "./Detail";
import List from './List'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Index} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/select" component={Select} />
            <Route path="/detail" component={Detail} />
            <Route path="/list" component={List} />

        </div>
    </Router>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
