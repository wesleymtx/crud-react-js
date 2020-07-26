import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2'
import NavBar from  './pages/Navbar'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2}/>
                <Route path="/navbar" component={NavBar}/>
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;