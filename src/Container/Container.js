import { Component } from "react";

import {Route,NavLink, Switch } from 'react-router-dom';
import AddPets from "./AddPet";
import UpdatePet from "./UpdatePet";
import Pets from "./Pets";
import { Sidebar } from "../NavBar/SideNav";
import Register from "../Authentication/Registration/Register";
import Login from "../Authentication/LoginUser/Login";
import Home from "../Ui/Home/Home";
import BookAppointment from "./BookAppointment";

class Container extends Component{
    render(){
        return(

            // {/* <NavLink to = '/register'>register</NavLink> */}
            // {/* <Switch>
                // <Route path='/register' component={Register}></Route>
            // </Switch> */}
            <div>
                <Route path='/home' component={Home} />
                <Route path='/register' exact component={Register}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/addpets' component={AddPets}/>
                <Route path='/updatePet' component={UpdatePet}/>
                <Route path='/pet/all' component={Pets}/>
                <Route path='/booking/user' exact component={BookAppointment}/>
                <Route path='/UserLanding' component={UserLanding}/>
            </div>
    )
        
    }
}

export default Container;