import React from "react";

export default function ListItem(props){
	return (
		<div className="list--item">
			<div className="form-check">
				<input 
					className="form-check-input"
					type="checkbox"
					checked={props.checked}
					onChange={(event)=>{props.handleChange(event,props.id)}}
				/>
				<input 
					type="text"
					placeholder={props.value}
					className="form-control"
					value={props.value}
					onChange={(event)=>{props.handleChange(event,props.id)}}
				/>
			</div>
		</div>
	)
}