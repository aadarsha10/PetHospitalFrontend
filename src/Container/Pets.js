import axios from 'axios'
import React, { Component } from 'react'
 
import {Link} from 'react-router-dom'


class Pets extends Component{
    state = {
        pet : []
    }


    //to retrieve data from the url

    componentDidMount(){
        axios.get("http://localhost:90/pet/user")
        .then((allData) => {
            console.log(allData)

            this.setState ({
                pet : allData.data.data
            })
        })
        .catch(err => {
            console.log(err.response)
        })
    }


    deleteProduct = (petId) =>{
        axios.delete("http://localhost/pet/delete", petId)
        .then(response =>{
            console.log(response)
        })
        .catch(err =>{
            console.log(err.response)
        })
    }


    render(){
        return(
            <div className="container">

                <div className="row">

                {
                        this.state.pet.map((pet) =>{

                            return(
                                <div className="col-md-3"><p>{pet.allData}</p>
                                <p><button >Delete pet</button></p>
                                <p><button><Link to={'/updatePet/' + pet._id}>Update</Link></button></p>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        )
    }
}

export default Pets;