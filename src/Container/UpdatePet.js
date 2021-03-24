import React, {Component} from 'react';
import axios from 'axios';
import { error, event } from 'jquery';
class UpdatePet extends Component{

    state = {
        Petname : "",
        PetAge : "",
        PetType : "",
        PetBreed : "",
    }
    sendPetData = (e) =>{
        e.preventDefault();//prevents form to refresh the page and loose all state
        const data = {
            Petname : this.state.Petname,
            PetAge : this.state.PetAge,
            PetType : this.state.PetType,
            PetBreed : this.state.PetBreed
        }
        axios.post("https://localhost:90/addpets",data)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        });
    }

    render(){
    return (
        <div>
                <h1>
                Pet Registration form
                </h1>
                <form>
                    <div class="form-group">
                        <label for="inputPetName">PetName</label>
                        <p><input type="text" class="form-control" id="PetName" placeholder="PetName" 
                        value={this.state.Petname}
                        onChange = {(event)=>{this.setState({PetName:event.target.value})}}/></p>
                    </div>
                    <div class="form-group">
                        <label for="PetAge">PetAge</label>
                        <p><input type="text" class="form-control" id="PetAge" placeholder="PetAge" 
                        value={this.state.PetAge}
                        onChange = {(event)=>{this.setState({PetAge:event.target.value})}}/></p>
                    </div>
                    <div class="form-group">
                        <label for="PetBreed">PetBreed</label>
                        <input type="text" class="form-control" id="PetBreed" placeholder="petBreed"
                        value={this.state.PetType}
                        onChange = {(event)=>{this.setState({PetType:event.target.value})}}/>
                    </div>
                    <div class="form-group">
                        <label for="PetType">PetType</label>
                        <input type="text" class="form-control" id="PetType" placeholder="PetType"
                        value={this.state.PetType}
                        onChange = {(event)=>{this.setState({PetType:event.target.value})}}/>
                    </div>
                
                    <button type="submit" class="btn btn-primary" onClick={this.sendPetData}>Add Pets</button>
                </form>
            </div>
        )
    }
}
export default UpdatePet;
