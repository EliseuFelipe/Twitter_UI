import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Cadastro from './components/Cadastro';

function Routes () {
    return(
        <BrowserRouter>
            
            <Switch>
                <Route exact path="/" component={Layout}/>
                <Route path="/Cadastro" component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;