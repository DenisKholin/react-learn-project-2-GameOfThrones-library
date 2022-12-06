import React, { Component } from 'react';
import './charDetails.css';

export default class CharDetails extends Component {


	render() {

		return (
			<div className="char-details rounded">
				<h4>1</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Gender</span>
						<span></span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Born</span>
						<span></span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Died</span>
						<span></span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Culture</span>
						<span></span>
					</li>
				</ul>
			</div>
		);
	}
}