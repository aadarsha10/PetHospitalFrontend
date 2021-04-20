import React, { useState } from 'react';
import axios from 'axios';
import { error, event } from 'jquery';
import { Button, TextField, FormControl, FormLabel, Radio, Input } from '@material-ui/core'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './register.css'
import { Link, useHistory } from 'react-router-dom'

export default function Register() {

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [response1, setResponse] = useState("");
    const [checkLogin, setLoginCheck] = useState(false);


    const registeruser = (e) => {
        e.preventDefault()
        console.log(fname, lname, email, username, password)
        const data = {
            fname: fname,
            lname: lname,
            email: email,
            username: username,
            password: password

        }

        axios.post("http://localhost:90/register", data).then(response => {
            console.log(response.data.message)
            setResponse(response.data.message)
            goToLogin()
        }).catch(error => {
            console.log(error)
        })

        console.log("response1", response1)

        if (response1 == "Registered") {
            alert("You have successfully Registered ")
            setLoginCheck(true);
        }


    }

    const history = useHistory()
    const goToLogin = () => {
        history.push("/login");
    }
    return (
        <div>
            {
                !checkLogin &&

                <div>
                    <div className="container">
                        <h1 className="text-center">User Registration</h1>

                        <div className="row">

                            <div className='col-md-6' id="regBox">
                                <form id="registrationForm" method="POST" action="">
                                    <TextField type="text" label="Enter first name" variant="outlined" className="inputBox" name="firstName" required value={fname} onChange={(event) => { return setfname(event.target.value) }}></TextField>&nbsp;
                                    <TextField type="text" label="Enter last name" variant="outlined" className="inputBox" name="lastName" required value={lname} onChange={(event) => { return setlname(event.target.value) }}></TextField>&nbsp;
                                    <TextField type="email" label="Enter email address" variant="outlined" className="inputBox" name="emailAddress" style={{ marginBottom: "20px" }}
                                        required value={email} onChange={(event) => { return setEmail(event.target.value) }}></TextField>&nbsp;

                        <TextField label="Enter Username" variant="outlined" className="inputBox" type="text" value={username} onChange={(event) => { return setUsername(event.target.value) }} required name="username"></TextField>&nbsp;

                        <TextField label="Enter a password" variant="outlined" className="inputBox" type="password" value={password} onChange={(event) => { return setPassword(event.target.value) }}
                                        name="password" required style={{ marginBottom: "20px" }}></TextField>&nbsp;

                        {/* <p><Input type="file" color="primary" style={{ marginBottom: "20px" }} name="accountantImage" onChange={this.handleFile} >Upload your image</Input></p> */}

                                    <Button variant="outlined" color="primary" className="submitBtn" onClick={registeruser}>Register</Button>

                                    <Link to='/login'><p><u>Click here to Login</u></p></Link>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            }
            {
                checkLogin &&
                goToLogin()
            }

        </div>

    )
}
