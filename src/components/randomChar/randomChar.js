import React, { Component } from 'react';
import './randomChar.css';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomChar extends Component {

	gotService = new GotService();

	state = {
		char: {},
		loading: true
	}

	componentDidMount() {
		this.updateChar();
		this.timerId = setInterval(this.updateChar, 1500)
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	onCharLoaded = char => {
		this.setState({
			char,
			loading: false,
			error: false
		})
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		})
	}

	updateChar = () => {
		const id = Math.floor(Math.random() * 1000 + 25);
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError)
	}

	render() {

		const { char, loading, error } = this.state;

		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? <View char={char} /> : null;

		return (
			<div className="random-block rounded">
				{errorMessage}
				{spinner}
				{content}
			</div>
		);
	}
}

const View = (char) => {
	const { char: { name, gender, born, death, culture } } = char;
	return (
		<>
			<h4>Random Character: {name}</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Gender </span>
					<span>{gender}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Born </span>
					<span>{born}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Died </span>
					<span>{death}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Culture </span>
					<span>{culture}</span>
				</li>
			</ul>
		</>

	)
}
