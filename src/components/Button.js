import React from 'react'

export const Button = function(props) {
	return(
		<button onClick={props.action} data-id={props.data_id}>{props.text}</button>
	);
}