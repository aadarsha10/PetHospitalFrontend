import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import '../scss/Register.scss'
import { Button, TextField} from '@material-ui/core'



const Login = ({ history }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [checkLogin, setCheckLogin] = useState(false);

    const loginstart = (e) => {
        e.preventDefault();
        console.log(username, password)
        const data = {
            username: username,
            password: password
        }
        axios.post("http://localhost:90/login", data)
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('fname', response.data.fname)
                localStorage.setItem('lname', response.data.lname)
                localStorage.setItem('username', response.data.username)
                localStorage.setItem('email', response.data.email)
                setCheckLogin(true)
                console.log("username", localStorage.getItem('username'))
            })
            .catch((err) => {
                console.log(err.response)
            })
    }



    const goToLanding = () => {
        history.push("/booking/user");
    }
    return (

        <div>
            {
                !checkLogin &&
                <div>
                    <div className="container">
                        <h1 className="text-center">Login</h1>

                        <div className="row">

                            <div className='col-md-6' id="regBox">
                                <form id="registrationForm" method="POST">

                                    <TextField type="text" label="Enter username" variant="outlined" className="inputBox" name="username" value={username} onChange={(event) => { return setUsername(event.target.value) }}></TextField>&nbsp;

                                <TextField label="Enter your password" variant="outlined" className="inputBox" type="password" value={password} onChange={(event) => { return setPassword(event.target.value) }}
                                        type="password" name="password" style={{ marginBottom: "20px" }}></TextField>&nbsp;

                                <Button variant="contained" color="primary" className="submitBtn" onClick={loginstart}>Login</Button>
                                </form>

                                <Link to='/adminlogin'><p><u>Sign In as Admin</u></p></Link>
                            </div>

                        </div>
                    </div>
                </div>
            }
            {
                checkLogin &&
                goToLanding()
            }
        </div>
    )
}

export default Login;