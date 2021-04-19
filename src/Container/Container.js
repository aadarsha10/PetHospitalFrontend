import { Component } from "react";
import Register from './Register';
import {Route,NavLink, Switch } from 'react-router-dom';
import Login from "./Login";
import AddPets from "./AddPet";
import UpdatePet from "./UpdatePet";
import Pets from "./Pets";
import { Sidebar } from "../NavBar/SideNav";

class Container extends Component{
    render(){
        return(
        <div class="container">
            {/* <NavLink to = '/register'>register</NavLink> */}
            {/* <Switch>
                <Route path='/register' component={Register}></Route>
            </Switch> */}
            <div className="slider-layout" style={{display : 'block'}}><Sidebar></Sidebar></div>
            <div className="row">
                <div className = "col-lg-6">
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/addpets' component={AddPets}/>
                <Route path='/updatePet' component={UpdatePet}/>
                <Route path='/pet/all' component={Pets}/>
                </div>
            </div>
         </div>
    )
        
    }
}

export default Container;