import React from 'react';


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[
				{
					id:1,
					name: 'robe',
					age: 20
				},{
					id:2,
					name: 'lauoro',
					age: 36
				},{
					id:1,
					name: "awere",
					age: 12
				}
			]
		}
	}


	render(){
		return(
				<div>
					<Header />
					
					{this.state.data.map((person, i)=><All key = {i} data = {person} />)}
				</div>
			)
	}
}


class Header extends React.Component{
	render(){
		return (
			<div>
				<h2>Aqui es el header</h2>
			</div>
			)
	}
}



class Content extends React.Component{
	render(){
		return (
			<div>
				<h2>Todo el contenido es aqui</h2>
			</div>
			)
	}
}


class All extends React.Component{

	render(){
		return(
			<div>
				<p>{this.props.data.age}</p>
				<p>{this.props.data.name}</p>
			</div>
			)
	}
}


export default App;


