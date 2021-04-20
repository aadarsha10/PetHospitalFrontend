import { Component } from "react";

import { appendStylesheets, appendScripts } from 'append-files'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './Home.css'

import { Button } from "@material-ui/core"

import { Link } from 'react-router-dom'



export default class Home extends Component {

    componentDidMount() {

        var style = [

            {
                "href": "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700"
            }
        ]

        var scripts = [
            "https://code.jquery.com/jquery-3.2.1.slim.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js",
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
        ]

        appendStylesheets(style)
        appendScripts(scripts)
    }



    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid purple" id="homeJumbo">
                    <div className="container">
                        <div className="row vertical-align-middle mt-5 mb-5">
                            <div className="col-md-6">
                                <h1 className="text-inverse">Here at Vet for Pet, We provide best care for ur beloved furry friends..</h1>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container mt-5 mb-4">
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
                <div style={{ borderBottom: "1px solid #dfe3e8;" }}>
                </div>
                <div className="container full-page mt-5" id="resources">
                    <div className="text-center mb-5">
                        <h2>Work Ethics</h2>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                            <img className="img-responsive" alt="card1" src="./dog.jpg"/>
                                <div className="card-body">
                                    <h4 className="card-title">Internal growth</h4>
                                    <p className="card-text">Helping those who can't speak.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                            <img className="img-responsive" alt="Chania" src="./windoge.jpg"/>
                                <div className="card-body">
                                    <h4 className="card-title">Easy Services.</h4>
                                    <p className="card-text">No problems in providingsupporyt.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                            <img className="img-responsive" alt="Chania" src="./dog.jpg"/>
                                <div className="card-body">
                                    <h4 className="card-title">Loreum Ipsium</h4>
                                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="./handshake.jpg"></img>
                            </div>
                            <div className="col-md-6">
                                <h2>About us</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                <Link to='/about'> <Button className="submitBtn" variant="contained" color="primary">Learn more</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

