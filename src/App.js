
import React from "react"
import ToDoItem from "./components/ToDoItem"
import './index.css';
import todosData from "./todosData"

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

// To Do list App with state and event handler

class App extends React.Component {
	constructor() {
		super()
		this.state ={
			todos: todosData
		}
	this.handleChange=this.handleChange.bind(this)

	}

	handleChange(id) {
		
	render() {
		const todothings= this.state.todos.map(item => <ToDoItem item={item}/>)

		return (
			<div>

				{todothings}
			</div>
			)
	}
}
export default App
