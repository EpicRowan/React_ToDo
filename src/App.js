
import React from "react"
import ToDoItem from "./components/ToDoItem"
import ContactCard from "./components/ContactCard"
import './index.css';
import todosData from ""

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



// //
// Contact Card App

// function App() {
//   return(
//     <div>
//     <ContactCard 
//     	name="Mr. Whiskerton"
//     	imgURL="http://placekitten.com/300/200"
//     	email="whiskers@catnip.com"
//     	/>
//     <ContactCard 
//     	name="Destroyer of Worlds"
//     	imgURL="http://placekitten.com/400/200"
//     	email="DOW@catnip.com"
//     	/>
//     </div>
//   )
// }


// class App extends React.Component {
// 	constructor() {
// 	super()
// 	this.state = {
// 		isLoggedIn: false
// 	}
// }
// render() {
// 	let wordDisplay
// 	if (this.state.isLoggedIn) {
// 		wordDisplay = "in"		
// 	} else {
// 		wordDisplay = "out"
// 	}
// 	return (
// 		<div>
// 			<h1> You're logged {wordDisplay}</h1>
// 		</div>

// 		)
// }

// }