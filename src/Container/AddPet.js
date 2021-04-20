import React, { useState } from 'react';
import axios from 'axios';
import { error, event } from 'jquery';
import { Button, TextField, FormControl, FormLabel, Radio, Input } from '@material-ui/core'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, useHistory } from 'react-router-dom'

export default function RegisterPet() {

    const [petName, setPetname] = useState("")
    const [petAge, setAge] = useState("")
    const [petType, setType] = useState("")
    const [petBreed, setBreed] = useState("")
    const [petGender, setGender] = useState("")
    const [petMedicalHistory, setMedical] = useState("")
    const username = localStorage.getItem('username')
    const [response1, setResponse] = useState("");
    const [checkLogin, setLoginCheck] = useState(false);


    const registerpet = (e) => {
        e.preventDefault()
        console.log(petName, petType, petBreed, petGender)
        const data = {
            petName: petName,
            petAge: petAge,
            petType: petType,
            petBreed: petBreed,
            petGender: petGender,
            petMedicalHistory: petMedicalHistory,
            userName: username

        }

        axios.post("http://localhost:90/pet/insert", data).then(response => {
            console.log(response.data.message)
            setResponse(response.data.message)

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
    const goToView = () => {
        history.push("/login");
    }
    return (
        <div>
            {
                <div>
                    <div>
                        <div className="container">
                            <h1 className="text-center"></h1>
                            <div className="row">
                                <div className="row">

                                    <div className='col-md-6' id="regBox">
                                        <form id="registrationForm" method="POST" action="">
                                            <TextField type="text" label="Enter Pet Name" variant="outlined" className="inputBox" name="petname" required value={petName} onChange={(event) => { return setPetname(event.target.value) }}></TextField>&nbsp;
                                <TextField type="number" label="Enter Phone Number" variant="outlined" className="inputBox" name="phone" required value={petAge} onChange={(event) => { return setAge(event.target.value) }}></TextField>&nbsp;
                                <TextField type="text" label="Enter Pet Name" variant="outlined" className="inputBox" name="petname" required value={petGender} onChange={(event) => { return setGender(event.target.value) }}></TextField>&nbsp;
                                <TextField type="text" label="Enter Pet Name" variant="outlined" className="inputBox" name="petname" required value={petType} onChange={(event) => { return setType(event.target.value) }}></TextField>&nbsp;
                                <TextField type="text" label="Enter Pet Name" variant="outlined" className="inputBox" name="petname" required value={petBreed} onChange={(event) => { return setBreed(event.target.value) }}></TextField>&nbsp;

                                <TextField type="reason" label="Username" disabled variant="outlined" className="inputBox" name="reason" style={{ marginBottom: "20px" }}
                                                required value={username}></TextField>&nbsp;
                                <Button variant="outlined" color="primary" className="submitBtn" onClick={registerpet}>Confirm</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

