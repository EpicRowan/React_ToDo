
import React from "react"
function FormComponent(props) {
	return (
			<main>
			<form>
			<input 
				name="firstName"
				value={props.data.firstName} 
				onChange={props.handleChange}
				placeholder="First Name"/> 
			<br />
			<input 
				name="lastName"
				value={props.data.lastName} 
				onChange={props.handleChange}
				placeholder="Last Name"/> 
			<br />
			<input 
				name="age" 
				value="" 
				onChange={props.handleChange}
				placeholder="Age"/> 
			<br />

			<label>
			<input 
				type="radio"
				name="gender"
				value="male"
				checked={props.data.gender === "male"}
				onChange={props.handleChange}/> 
				Male </label>
			<br />
			<label>
			<input 
				type="radio"
				name="gender"
				value="female"
				checked={props.data.gender === "female"}
				onChange={props.handleChange}/> 
				Female </label>
			<br />

			<select 
				value={props.data.destination}
				name="destination"
				onChange= {props.handleChange}

			>
			<option value="USA">USA</option>
			<option value="Japan">Japan</option>
			<option value="Narnia">Narnia</option>
			</select>

			<br />

			<label>
			<input
				type="checkbox"
				name="isVegan"
				onChange={props.handleChange}
				checked={props.data.isVegan} />
				Vegan?
				</label>
				<br />

			<label>
			<input
				type="checkbox"
				name="isKosher"
				onChange={props.handleChange}
				checked={props.data.isKosher} />
				Kosher?
				</label>
				<br />

			<button>Submit</button>
			</form>
			<hr />
			<h2> Entered Information:</h2>
			<p> Your name: {props.data.firstName} {props.data.lastName} </p>
			<p> Your age: {props.data.age} </p>
			<p> Your gender: {props.data.gender}</p>
			<p> Your destination: {props.data.destination}</p>
			<p> Dietary Restricitons: {props.data.isVegan ? "Vegan": null} {props.data.isKosher ? "Kosher": null}</p>
			</main>

			)
	}
export default FormComponent