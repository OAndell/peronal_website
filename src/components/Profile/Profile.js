import React from 'react';
import ReactDOM from 'react-dom';
import './Profile.css';

export default class Profile extends React.Component {
	constructor(props){
		super(props)
		this.image = props.image
		this.name = props.name
		this.title = props.title
		this.email = props.email
		this.location = props.location
		this.linkdin = props.linkdin
		this.github = props.github
	}


	displayGithub(){
		if(this.props.data.github != null){
			return <p><a href={this.props.data.github}><i className="fa fa-github"></i></a></p>;
		}

	}

	displayLinkedin(){
		if(this.props.data.github != null){
			return <p><a href={this.props.data.linkedin}><i className="fa fa-linkedin"></i></a></p>;
		}
	}


	render() {
			console.log(this.props.data)
	    return(
			<div className="profileBackground">
				<img src={this.image} className="bigProfileImage"/>
				<h1>{this.props.data.name}</h1>
				<h2>{this.props.data.title}</h2>
				<hr className="profiledivider"/>
				<div className="profileTextHolder">
					<p><i className="fa fa-location-arrow"></i> {this.props.data.location}</p>
					<p><i className="fa fa-envelope"></i> {this.props.data.email}</p>
					<p><i class='fa fa-address-card'/> <a href={this.props.data.resume}>Resume</a></p>
				</div>
				<hr className="profiledivider"/>
				<table className="iconLinksHolder">
					<tr>
						<th>{this.displayGithub()}</th>
							&nbsp;
						<th>{this.displayLinkedin()}</th>
						</tr>
				</table>
			</div>
		);
    }
}
