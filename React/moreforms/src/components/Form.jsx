import React, { useState } from 'react';
import { flushSync } from 'react-dom';

const Form = props => {
	const [userName, setUsername] = useState('');
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState('');
	const [password, setPassword] = useState('')
	const [cpassword, setCpassword] = useState('');

	const createUser= (e) => {
		e.preventDefault();
		const newUser = { fname, lname, email, password, cpassword };
		console.log("Hi", newUser);
	}

	const lengthValidator= (input, num) => {
		if(input.length < 2){
			return false;
		} else {return true};
	}

	const matchyMatchy= (input, input2) => {
		input == input2 ? false : true;
	}
	return(
		<div className='container'>
			<form onSubmit={createUser} className="container text-center">
                <div className="form-group m-3">
                    <label htmlFor="fname">First Name:</label>
                    <input className="form-control" name= "fname" type="text" placeholder="First Name" value={fname} onChange={ (e) => setFname(e.target.value) }/>
					{lengthValidator(fname, 2) || fname.length ==0 ? "" : <p>First name must be 2 characters!</p>} 
                </div>
                <div className="form-group m-3">
                    <label htmlFor="lname">Last Name:</label>
                    <input className="form-control" name= "lname" type="text" placeholder="Last Name" value={lname} onChange={ (e) => setLname( e.target.value) }/>
					{lengthValidator(lname, 2) || lname.length ==0 ? "" : <p>Last name must be 2 characters!</p>}
                </div>
                <div className="form-group m-3">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" name= "email" type="text" placeholder="example@mail.com" value={email} onChange={ (e) => setEmail( e.target.value) }/>
					{lengthValidator(email, 5) || email.length ==0 ? "" : <p>Email must be 2 characters!</p>}
                </div>
                <div className="form-group m-3">
                    <label htmlFor="age">Age:</label>
                    <input className="form-control" name= "age" type="text" placeholder="Age" value={age} onChange={ (e) => setAge( e.target.value) }/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="password">Password:</label>
                    <input className="form-control" name= "password" type="password" placeholder="Password" value={password} onChange={ (e) => setPassword( e.target.value) }/>
					{lengthValidator(password, 3) || password.length ==0 ? "" : <p>Password must be 2 characters!</p>}
					{matchyMatchy(password, cpassword) || fname.length ==0 ? "" : <p>Passwords must match!</p>}

                </div>
                <div className="form-group m-3">
                    <label htmlFor="cpassword">Confirm Password:</label>
                    <input className="form-control" name= "cpassword" type="password" placeholder="Password" value={cpassword} onChange={ (e) => setCpassword( e.target.value) }/>
					{lengthValidator(cpassword, 2) || cpassword.length ==0 ? "" : <p>Password must be 2 characters!</p>}
					{matchyMatchy(password, cpassword) || fname.length ==0 ? "" : <p>Passwords must match!</p>}
                </div>
                <input type= "submit" className="btn-primary btn" value="Register"/>
            </form>

			
		</div>
	);
}

export default Form;