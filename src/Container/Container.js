import { Component } from "react";

import {Route,NavLink, Switch } from 'react-router-dom';
import AddPets from "./AddPet";
import UpdatePet from "./UpdatePet";
import Pets from "./Pets";
import { Sidebar } from "../NavBar/SideNav";
import Register from "../Authentication/Registration/Register";
import Login from "../Authentication/LoginUser/Login";
import Home from "../Ui/Home/Home";
import BookAppointment from "../Ui/Appointment/BookAppointment";
import GetuserBooking from "../Ui/Appointment/ViewBooking";
import Profile from "../Ui/About/About";
import Logout from "../Authentication/Logout/Logout";

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
                <Route path='/pet/insert' component={AddPets}/>
                <Route path='/booking/user' exact component={BookAppointment}/>
                <Route path='/booking/username' exact component={GetuserBooking}/>
                <Route path='/about' exact component={Profile}/>
                <Route path='/logout' exact component={Logout}/>
                
                {/* <Route path='/UserLanding' component={UserLanding}/> */}
            </div>
    )
        
    }
}

export default Container;

