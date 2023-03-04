import React from "react";

export default function ListItem(props){
	return (
		<div className="list--item">
			<input 
				type="checkbox"
			/>
			<input 
				type="text"
				placeholder={props.value}
				className="form--input"
				value={props.value}
				onChange={(event)=>{props.handleChange(event,props.id)}}
			/>	
		</div>
	)
}