import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Profile() {

    const fname = localStorage.getItem('fname')
    const email = localStorage.getItem('email')
    const lname = localStorage.getItem('lname')
    const username = localStorage.getItem('username')

    const data = {
        userName: username,
        email: email
    }

    useEffect(() => {
        axios.post("http://localhost:90/update", data)
            .then((response => {
                console.log('response', response);
            }));
    }, []);


    return (
        <div className='container-fluid'>
            <div class="col-lg-6 mb-4">
                <div class="card" style={{margin: "auto"},{width:"60%"},{border: "5px solid"},{padding: "10px"}}>
                    <div class="card-body">
                        <h5 class="card-title">{fname + ' ' + lname}</h5>
                        <p class="card-text">Username : {username}</p>
                        <p class="card-text">Email: {email}</p>
                        <Link to='/accountant/view/single/:id'><a href="" class="btn btn-outline-success btn-sm" >View</a></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
