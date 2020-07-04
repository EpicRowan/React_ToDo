
// import React from "react"
// import ToDoItem from "./components/ToDoItem"
// import './index.css';
// import todosData from "./todosData"

// To Do list App

// function App() {
// 	const todothings= todosData.map(item => <ToDoItem item={item}/>)
//   return(
//     <div>
//       <{todothings} />

//     </div>
//   )
// }

// // To Do list App with state

// class App extends React.Component {
// 	constructor() {
// 		super()
// 		this.state ={
// 			todos: todosData
// 		}
		
// 	}
// 	render() {
// 		const todothings= this.state.todos.map(item => <ToDoItem item={item}/>)

// 		return (
// 			<div>
// 				{todothings}
// 			</div>
// 			)
// 	}
// }


// export default App

// // To Do list App with state and event handler

// class App extends React.Component {
// 	constructor() {
// 		super()
// 		this.state ={
// 			todos: todosData
// 		}
// 	this.handleChange=this.handleChange.bind(this)

// 	}

// 	handleChange(id) {
// 		this.setState(prevState => {
// 			const updatedTodos = prevState.todos.map(todo => {
// 				if (todo.id === id) {
// 					todo.completed = !todo.completed
// 				}
// 				return todo
// 			})
		
// 			return {
// 				todos: updatedTodos
// 			}
// 			})
// 	}
// 	render() {
// 		const todothings= this.state.todos.map(item => <ToDoItem item={item}
// 			handleChange={this.handleChange}/>)

// 		return (
// 			<div>

// 				{todothings}
// 			</div>
// 			)
// 	}
// }

// Practice re-doing function and component

// class App extends React.Component {
// 	constructor() {
// 		super()
// 		this.state ={
// 			todos: todosData
// 		}
// 	this.handleChange=this.handleChange.bind(this)

// 	}

// 	handleChange(id) {
// 		this.setState(prevState) => {
// 			const updatedTodos = prevState.todos.map(todo =>
// 				if (todos === id) {
// 					todocompleted != updatedTodos
// 				}			
// 				return todos

// 			return {
// 				todos: updatedTodos
// 			}
// 					)
// 				}
// 		}
// 	render() {
// 		const todothings= this.state.todos.map(item => <ToDoItem item={item}/>)

// 		return (
// 			<div>
// 				{todothings}
// 			</div>
// 			)
// 	}
// }
// export default App


// Conditional Rendering practice

// class App extends React.Component {
// 	constructor () {
// 	super()
// 	this.state = {
// 		isLoggedIn: false
// 	}
// 	this.handleClick = this.handleClick.bind(this)
// }

// handleClick() {
// 	this.setState(prevState => {
// 		return {
// 			isLoggedIn: !prevState.isLoggedIn
// 		}
// 	})
// }
// 	render() {
// 		let buttonText = this.state.isLoggedIn ? "Log out" : "Log in"
// 		let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
// 	return (
// 		<div>
// 		<button onClick= {this.handleClick> {buttonText}</button>
// 		{<h1> {displayText} </h1>
// 		</div>

// 	)
// }
// }

// export default App

// Forms practice

// import React, {Component} from "react"

// class App extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			firstName:""
// 		}
// 		this.handleChange = this.handleChange.bind(this)
// 	}

// 		handleChange(event) {
// 			this.setState({
// 				[event.target.name]: event.target.value
// 			})
// 		}

// 		render() {
// 			return (
// 				<form>
// 					<input type="text" 
// 					 value={this.state.firstName}
// 					 name="firstName"
// 					 placeholder="First Name" 
// 					 onChange={this.handleChange}/>
// 					 <br />
// 					<input type="text"
// 					 value={this.state.lastName}
// 					 name="lastName"
// 					 placeholder="Last Name" 
// 					 onChange={this.handleChange}/>
// 					 <h1>{this.state.firstName} {this.state.lastName} </h1>
// 				</form>
// 				)
// 		}
// 	}

// export default App

// Rebuilding form from memory

import React, {Component} from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			firstName:"",
			lastName:"",
			age:"",
			gender:"",
			destination:"",
			dietaryRestrictions: []

		} 
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const{name, value} = event.target
		this.setState({
			[name]:value
		})
	}

	render() {
		return (
			<main>
			<form>
			<input 
				name="firstName"
				value={this.state.firstName} 
				onChange={this.handleChange}
				placeholder="First Name"/> 
			<br />
			<input 
				name="lastName"
				value={this.state.lastName} 
				onChange={this.handleChange}
				placeholder="Last Name"/> 
			<br />
			<input 
				name="age" 
				value={this.state.age} 
				onChange={this.handleChange}
				placeholder="Age"/> 
			<br />

			<label>
			<input 
				type="radio"
				name="gender"
				value="male"
				checked={this.state.gender === "male"}
				onChange={this.handleChange}/> 
				Male </label>
			<br />

			<button>Submit</button>
			</form>
			<hr />
			<h2> Entered Information:</h2>
			<p> Your name: {this.state.firstName} {this.state.lastName} </p>
			<p> Your age: {this.state.age} </p>
			<p> Your gender: {this.state.gender}</p>

			</main>

			)
	}
}

export default App