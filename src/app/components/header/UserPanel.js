import React from "react";

import Avatar from "../../../vendors/img/avatar.png"

export default class UserPanel extends React.Component {
	render() {
		return (
			<div className="user-panel">
			  <div className="pull-left image">
			    <img src={ Avatar } className="img-circle" alt="User Image" />
			  </div>
			  <div className="pull-left info">
			    <p>Hello, Orciners</p>
			  </div>
			</div>
		);
	}
}








