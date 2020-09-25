import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from '../components/Main';
import AllRecipe from '../components/AllRecipe';
import Disabled from '../components/Disabled';
import Incorrect from '../components/Incorrect';
import Untagged from '../components/Untagged';

const AllRoutes=()=>{
    return(
    <Router>
        <Main/>
        <Switch>
            <Route path='/' exact component={AllRecipe}/>
            <Route path='/dis' exact component={Disabled}/>
            <Route path='/inc' exact component={Incorrect}/>
            <Route path='/un' exact component={Untagged}/>
        </Switch>
    </Router>
    )
}

export default AllRoutes;
