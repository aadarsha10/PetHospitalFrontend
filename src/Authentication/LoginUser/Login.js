import React, {Component} from 'react';

class Login extends Component{
    render(){
    return (
        <div>
                <div className="container">
                    <h1 className="text-center">Login</h1>

                    <div className="row">

                        <div className='col-md-6' id="regBox">
                            <form id="registrationForm" method="POST">
                               
                                <TextField type="text" label="Enter email address" variant="outlined" className="inputBox" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange}></TextField>&nbsp;

                                <TextField label="Type your password" variant="outlined" className="inputBox" type="password" value={this.state.password} onChange={this.handleChange}
                                  type="password"  name="password" style={{ marginBottom: "20px" }}></TextField>&nbsp;

                                <Button variant="contained" color="primary" className="submitBtn" onClick={this.login}>Login</Button>
                            </form>

                            <Link to='/accountantLogin'><p><u>Click here to sign in as an accountant</u></p></Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
