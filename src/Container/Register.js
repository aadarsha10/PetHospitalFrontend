import React, {Component} from 'react';
import axios from 'axios';
import { error, event } from 'jquery';
class Register extends Component{

    state = {
        firstName : "",
        lastName : "",
        userName : "",
        email : "",
        password : ""
    }
    sendUserData = (e) =>{
        e.preventDefault();
        const data = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            userName : this.state.userName,
            email : this.state.email,
            password : this.state.password
        }
        axios.post("https://localhost:90/register",data)
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
        <div className="container">
            <h1 className="text-center">User Registration</h1>

            <div className="row">

                <div className='col-md-6' id="regBox">
                    <form id="registrationForm" method="POST">
                        <TextField type="text" label="Enter first name" variant="outlined" className="inputBox" name="accountantFName" required onChange={this.handleChange}></TextField> &nbsp;
                        <TextField type="text" label="Enter last name" variant="outlined" className="inputBox" name="accountantLName" required onChange={this.handleChange}></TextField>&nbsp;
                        <TextField type="email" label="Enter email address" variant="outlined" className="inputBox" name="accountantEmailAddress" style={{ marginBottom: "20px" }}
                         required onChange={this.handleChange}></TextField>&nbsp;

                       <p>Date of birth <TextField variant="outlined" type="date" InputLabelProps={{ shrink: true }} style={{ marginBottom: "20px" }} name="accountantDOB" onChange={this.handleChange} /></p> &nbsp;
                        &nbsp; &nbsp;

                        <FormControl component="fieldset">
                            <FormLabel component="legend">
                                Gender &nbsp;
                            </FormLabel>
                            <RadioGroup aria-label="gender" name="gender" value={this.value} onChange={this.handleChange} row name="gender">
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>

                        <TextField label="Enter your experience(in years)" variant="outlined" className="inputBox" type="number" onChange={this.handleChange}
                            name="accountantExperience"></TextField>&nbsp;

                        <TextField label="Enter your mobile number" variant="outlined" className="inputBox" type="number" onChange={this.handleChange}
                            name="accountantMobNo"></TextField>&nbsp;

                            
                        <TextField label="Quote your price(per day)" variant="outlined" className="inputBox" type="number" onChange={this.handleChange}
                            name="pricePerDay"></TextField>&nbsp;

                        <TextField label="Type your password" variant="outlined" className="inputBox" type="password" onChange={this.handleChange}
                            name="accountantPassword" required style={{ marginBottom: "20px" }}></TextField>&nbsp;

                            <p><Input type="file" color="primary" style={{ marginBottom: "20px" }} name="accountantImage" onChange={this.handleFile} >Upload your image</Input></p>

                        <Button variant="contained" color="primary" className="submitBtn" onClick={this.registerAccountant}>Register</Button>

                        <Link to='/register'><p><u>Click here to register as a user</u></p></Link>
                    </form>
                </div>

            </div>
        </div>
    </div>
        )
    }
}
export default Register;
