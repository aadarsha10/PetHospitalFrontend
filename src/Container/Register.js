import React, {Component} from 'react';
import axios from 'axios';
import { error } from 'jquery';
class Register extends Component{

    state = {
        firstName : "",
        lastName : "",
        dob : "",
        userName : "",
        email : "",
        password : "",
    }
    sendUserData = (e) =>{
        e.preventDefault();
        const data = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            dob : this.state.dob,
            userName : this.state.userName,
            email : this.state.email,
            password : this.state.password
        }
        axios.post("https://localhost:90/registerUser",data)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        });
    }

    render(){
    return (
        <div>
                <h1>
                Registration form
                </h1>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.sendUserData}>Register</button>
                </form>
            </div>
        )
    }
}
export default Register;
