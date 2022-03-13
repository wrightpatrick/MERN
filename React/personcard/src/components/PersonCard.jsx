import React, {Component} from "react";

class PersonCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			age: 0
		}
	}
	ageUp = () => {
		this.setState({age: this.state.age + 1});
	}
	birthdayButton = () => {
		console.log("button clicked");
		
	}

	render(){
		return(
			<div className="card" style={{width: "18rem"}}>
				<div className="card-body m-2">
					<h2 className="card-title">{this.props.lastName}, {this.props.firstName}</h2>
					<p className="card-text">Age: {this.state.age}</p>
					<p className="card-text">Age: {this.props.age}</p>
					<p className="card-text">Hair Color: {this.props.hairColor}</p>
					<button className="btn btn-outline-success" onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
					<button className="btn btn-outline-success" onClick={ this.ageUp }>State Age Up</button>
					<button className="btn btn-outline-info" onClick={ this.birthdayButton }>Props Age Up</button>
				</div>
			</div>
		)
	}
	
}

export default PersonCard;