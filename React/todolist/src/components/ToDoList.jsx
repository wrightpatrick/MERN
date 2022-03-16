import React from 'react';

const ToDoList = (props) => {
	return(
		<div className='form-control my-2'>
			<p className='text-start display-6'>{props.name}</p>
			<span className='text-end'>Task Completed?</span>
			<input  type='checkbox' className='float-end mx-3'/>
		</div>
	);
}

export default ToDoList;