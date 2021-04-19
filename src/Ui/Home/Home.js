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
                                <h1 className="text-inverse">With Hire for Audit, you can hire the available auditors and accoutants in order to improve your finanacial statements and performances.</h1>
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
                        <h2>Benefits of using the application</h2>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <img className="card-img-top" src="./finance.jpg" alt="cardImg" />
                                <div className="card-body">
                                    <h4 className="card-title">Financial growth</h4>
                                    <p className="card-text">With the help of the auditors and accountants, you can gain boost in your monetary value.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <img className="card-img-top" src="./handshake.jpg" alt="cardImg" />
                                <div className="card-body">
                                    <h4 className="card-title">Find the right man</h4>
                                    <p className="card-text">We guarantee you will find the perfect temporary staffs for your financial tasks.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <img className="card-img-top" src="./comms.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title">Clear communication</h4>
                                    <p className="card-text">With the help of our applicatio, expect clearcut communication with your hired accountants</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="./question.svg"></img>
                            </div>
                            <div className="col-md-6">
                                <h2>About us</h2>
                                <p>Excellent Business Plans’ team of start-up and business professionals will e
            xpertly guide you through the process of facilitating growth, meeting your business goals and taking your start-up dreams and making them a reality. Our goal is to improve your business performance.</p>
                                <Link to='/about'> <Button className="submitBtn" variant="contained" color="primary">Learn more</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

