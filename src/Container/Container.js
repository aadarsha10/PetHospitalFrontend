import { Component } from "react";
import Register from './Register';
import {Route,NavLink, Switch } from 'react-router-dom';
import Login from "./Login";

class Container extends Component{
    render(){
        return(
        <div class="container">
            {/* <NavLink to = '/register'>register</NavLink> */}
            {/* <Switch>
                <Route path='/register' component={Register}></Route>
            </Switch> */}
            <div className="row">
                <div className = "col-lg-6">
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                </div>
            </div>
         </div>
    )
        
    }
}

export default Container;