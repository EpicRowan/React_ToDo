
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

// To Do list App with state

class App extends React.Component {
	constructor() {
		super()
		this.state ={
			todos: todosData
		}
		
	}
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
