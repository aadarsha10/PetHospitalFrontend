import axios from "axios";
import { Component } from "react";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './viewAccountants.css'
import {Link} from 'react-router-dom'

import {Modal} from '@material-ui/core'

export default class ViewAccountants extends Component {

    

    state = {
        accountants: []
    }

    componentDidMount() {
        axios.get('http://localhost:90/accountant/all')
            .then((allData) => {
                console.log('allllllllllllllllll',allData)

                this.setState({
                    accountants: allData.data
                })

                console.log('accountants ', this.state.accountants)

            }).catch(err => {
                console.log(err.response)
            })


    }

    

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                    {this.state.accountants.map((accountants) => {
                        return(
                            <div class="col-lg-4 mb-4">
                                <div class="card">
                                    
                                    <img src={'http://localhost:90/' + accountants.accountantImage } alt="accountantImg" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">{accountants.accountantFName + ' '+ accountants.accountantLName}</h5>
                                        <p class="card-text">Experience in years : {accountants.accountantExperience}</p>
                                        <p class="card-text">{accountants.gender}</p>
                                        <p class="card-text">RS {accountants.pricePerDay + '/day'}</p>
                                       <Link to='/accountant/view/single/:id'><a href=""  class="btn btn-outline-success btn-sm" >View</a></Link> 

                                    </div>
                                </div>
                            </div>
                        )
                            
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}