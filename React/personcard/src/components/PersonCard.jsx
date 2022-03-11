import React, {Component} from "react";

class PersonCard extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="card" style={{width: "18rem"}}>
				<div className="card-body m-2">
					<h2 className="card-title">{this.props.lastName}, {this.props.firstName}</h2>
					<p className="card-text">Age: {this.props.age}</p>
					<p className="card-text">Hair Color: {this.props.hairColor}</p>
				</div>
			</div>
		)
	}
	
}

export default PersonCard;