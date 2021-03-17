import React, {Component} from 'react';
import axios from 'axios';
import { error, event } from 'jquery';
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
                        <label for="inputFirstName">FirstName</label>
                        <p><input type="text" class="form-control" id="firstName" placeholder="FirstName" 
                        value={this.state.firstName}
                        onChange = {(event)=>{this.setState({firstName:event.target.value})}}/></p>
                    </div>
                    <div class="form-group">
                        <label for="lastName">lastName</label>
                        <p><input type="text" class="form-control" id="lastName" placeholder="LastName" 
                        value={this.state.lastName}
                        onChange = {(event)=>{this.setState({lastName:event.target.value})}}/></p>
                    </div>
                    <div class="form-group">
                        <label for="dob">Date of Birth</label>
                        <input type="date" class="form-control" id="dateofbirth" placeholder="Date of Birth"
                        value={this.state.dob}
                        onChange = {(event)=>{this.setState({dob:event.target.value})}}/>
                    </div>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="UserName"
                        value={this.state.userName}
                        onChange = {(event)=>{this.setState({userName:event.target.value})}}/>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Email"
                        value={this.state.email}
                        onChange = {(event)=>{this.setState({email:event.target.value})}}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>                    
                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password"
                        value={this.state.password}
                        onChange = {(event)=>{this.setState({password:event.target.value})}}/>
                    </div>
                    {/* <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" class="btn btn-primary" onClick={this.sendUserData}>Register</button>
                </form>
            </div>
        )
    }
}
export default Register;
