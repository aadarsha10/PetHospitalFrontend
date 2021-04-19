import React, {Component} from 'react';
import axios from 'axios';
import { error, event } from 'jquery';
class BookAppointment extends Component{

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
        axios.post("https://localhost:90/booking/user",data)
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
                Let Us know about your furry friend!
                </h1>
                <form>
                    <div class="form-group">
                        <label for="PetName">PetName</label>
                        <p><input type="text" class="form-control" id="PetName" placeholder="PetName" 
                        value={this.state.PetName}
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
                        value={this.state.PetBreed}
                        onChange = {(event)=>{this.setState({PetBreed:event.target.value})}}/>
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
export default BookAppointment;