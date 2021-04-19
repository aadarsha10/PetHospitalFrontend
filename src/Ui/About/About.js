import { Component } from "react";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './about.css'
import './scroll.js'




export default class About extends Component {




    render() {
        return (
            <div>
                <div className="jumbotron text-center" id="jumbotron">
                    <h1>HIRE FOR AUDIT</h1>
                    <p style={{color : "white"}}>We specialize in providing a platform for both accountants and clients</p>
                    <form class="form-inline">
                        <div className="input-group container" id="subBtn">
                            <input type="email" class="form-control" size="50" placeholder="Email Address" />
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-success" >Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="container-fluid" id="aimDiv">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="./desc.svg" id="desc" alt="descLogo"></img>
                        </div>
                        <div className="col-sm-7">
                            <h2>What we are aiming for</h2>
                            <h4><strong>MISSION:</strong> Our mission is to bring auditors, accoutants and clients into a singular platform</h4>
                            <h5><strong>VISION:</strong> Our vision is to have this application be the go to plaform for both clients to hire accountants
                    and for accountants to gain hire requests</h5>
                        </div>
                    </div>


                </div>

                <br></br>
                <br></br>

                <div className="container-fluid text-center" id="services">
                    <h2>SERVICES</h2>
                    <h4>What we offer</h4>
                    <br></br>
                    <div class="row">
                        <div class="col-sm-4">
                            <img src="./support.svg" alt="supportImg" className="serviceImg"></img>
                            <h4>Platform</h4>
                            <p>We provide a common ground for both professionals and clients.</p>
                        </div>
                        <div class="col-sm-4">
                            <img src="./work.svg" alt="workImg" className="serviceImg"></img>
                            <h4>WORK PROGRESS</h4>
                            <p>You can view the work progress using our dashboard.</p>
                        </div>
                        <div class="col-sm-4">
                            <img src="./security.svg" alt="securityImg" className="serviceImg"></img>
                            <h4>SECURITY</h4>
                            <p>We ensure the professionals registered on our platforms are authentic.</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center" id="services">
                    <h2>How our system works</h2>
                    <h4>Step-by-Step</h4>
                    <br></br>
                    <div class="row">
                        <div class="col-sm-4">
                            <img src="./reg.svg" alt="supportImg" className="serviceImg"></img>
                            <h4>Registration</h4>
                            <p>First simply register on our website.</p>
                        </div>
                        <div class="col-sm-4">
                            <img src="./book.svg" alt="workImg" className="serviceImg"></img>
                            <h4>Book your man</h4>
                            <p>Just select the desired accountant for hire</p>
                        </div>
                        <div class="col-sm-4">
                            <img src="./trend.svg" alt="securityImg" className="serviceImg"></img>
                            <h4>Progress</h4>
                            <p>Now just with some co-operation, you can watch your financial performance change</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-center" style={{fontStyle : "oblique"}}>What our customers say</h2>
                    <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <h4>"This applications is the best. I am so working through it"<br /><span>Jimmy Mcgill, JM Firm</span></h4>
                            </div>
                            <div className="item">
                                <h4>"One word... WOW!!"<br /><span>John Doe, CFO</span></h4>
                            </div>
                            <div className="item">
                                <h4>"Could I... BE any more happy with this app?"<br /><span>Chandler Bing, Senior Accountant</span></h4>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        )
    }
}

