import React, {Component} from 'react';
import axios from 'axios';
import { error, event } from 'jquery';
import { Button, TextField, FormControl, FormLabel, Radio, Input } from '@material-ui/core'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './register.css'
import { Link } from 'react-router-dom'

class Register extends Component{

    state = {
        fname : "",
        lname : "",
        username : "",
        email : "",
        password : ""
    }
    registeruser = (e) =>{
        e.preventDefault();
        const data = new FormData()

        data.append('firstName', this.state.fname)
        data.append('lasttName', this.state.lname)
        data.append('email', this.state.email)
        data.append('userName', this.state.username)
        data.append('password', this.state.password)

        axios.post("https://localhost:90/register",data)
        .then(response=>{
            console.log(response)
            window.location.href = '/home'
        })
        .catch(error=>{
            console.log(error);
        });
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
    return (
        <div>
        <div className="container">
            <h1 className="text-center">User Registration</h1>

            <div className="row">

                <div className='col-md-6' id="regBox">
                    <form id="registrationForm" method="POST" action="">
                        <TextField type="text" label="Enter first name" variant="outlined" className="inputBox" name="firstName" required onChange={this.handleChange}></TextField>&nbsp;
                        <TextField type="text" label="Enter last name" variant="outlined" className="inputBox" name="lastName" required onChange={this.handleChange}></TextField>&nbsp;
                        <TextField type="email" label="Enter email address" variant="outlined" className="inputBox" name="emailAddress" style={{ marginBottom: "20px" }}
                         required onChange={this.handleChange}></TextField>&nbsp;

                        <TextField label="Enter Username" variant="outlined" className="inputBox" type="text" onChange={this.handleChange} required name="username"></TextField>&nbsp;

                        <TextField label="Enter a password" variant="outlined" className="inputBox" type="password" onChange={this.handleChange}
                            name="password" required style={{ marginBottom: "20px" }}></TextField>&nbsp;

                        {/* <p><Input type="file" color="primary" style={{ marginBottom: "20px" }} name="accountantImage" onChange={this.handleFile} >Upload your image</Input></p> */}

                        <Button variant="outlined" color="primary" className="submitBtn" onClick={this.registeruser}>Register</Button>

                        <Link to='/login'><p><u>Click here to Login</u></p></Link>
                    </form>
                </div>

            </div>
        </div>
    </div>
        )
    }
}
export default Register;
