import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Box extends Component{
	constructor(props){
		super(props);
	}

render(){
	const {text,number} = this.props;

	return(
		<div className={this.props.isDark ? "box dark" : "dark"}>
			<marquee className={this.props.isDark ? "box dark" : "dark"}>hey</marquee>
			<h2>{number}</h2>
			<marquee className={this.props.isDark ? "box dark" : "dark"}>{text}</marquee>
			<h1>{number > 0 ? "positive number" : "negative number"}</h1>
		</div>
	)
}
}
export default Box;