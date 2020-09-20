import React from 'react'

function FormDisplay(props){
      return(
        <div>
            <form>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={props.handleChange} />
                <br /><br />
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={props.handleChange} />
                <br /><br />
                <label>DOB: </label>
                <input type="text" name="age" onChange={props.handleChange} placeholder="0"/>
                <br /><br />
                <label>Country: </label>
                <select name="country" onChange={props.handleChange}>
                    <option>Please select a value</option>
                    <option value="USA">Ladakh</option>
                    <option value="India">Srinagar</option>
                    <option value="Canada">Maldives</option>
                </select>
                <br /><br />
                <label>City: </label>
                <select name="city" onChange={props.handleChange}>
                    <option>Please select a value</option>
                    <option value="New York">Ladakh</option>
                    <option value="Delhi">Srinagar</option>
                    <option value="Toronto">Maldives</option>
                </select>
                <br /><br />
               
                <button>Submit</button>
            </form>
            <hr />
            <div>
                <h2>Entered Information</h2>
                <label>Your Name: {props.data.firstName} {props.data.lastName}</label><br /><br />
                <label>Your DOB: {props.data.age}</label><br /><br />
                <label>Your Country: {props.data.country}</label><br /><br />
                <label>Your City: {props.data.city}</label><br /><br />

                
            </div>
        </div>
       
      )
}

export default FormDisplay