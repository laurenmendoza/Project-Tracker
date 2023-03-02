import React from "react";

export default function ListItem(props){
	return (
		<div className="list--item">
			<input 
				type="text"
				placeholder={props.value}
				className="form--input"
			/>	
		</div>
	)
}