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
		if(this.github != null){
			return <p><a href={this.github}><i className="fa fa-github"></i></a></p>;
		}

	}

	displayLinkedin(){
		if(this.linkdin != null){
			return <p><a href={this.linkdin}><i className="fa fa-linkedin"></i></a></p>;
		}
	}


	render() {
	    return(
			<div className="profileBackground">
				<img src={this.image} className="bigProfileImage"/>
				<h1>{this.name}</h1>
				<h2>{this.title}</h2>
				<hr className="profiledivider"/>
				<div className="profileTextHolder">
					<p><i className="fa fa-location-arrow"></i> {this.location}</p>
					<p><i className="fa fa-envelope"></i> {this.email}</p>
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
