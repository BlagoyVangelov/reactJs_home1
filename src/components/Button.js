import React from 'react'

// export const Button = ({text, action, data_id}) => {
// 	return(
// 		<button onClick={action} data-id={data_id}>{text}</button>
// 	);
// }

export const Button = function(props) {
	return(
		<button onClick={props.action} data-id={props.data_id}>{props.text}</button>
	);
}