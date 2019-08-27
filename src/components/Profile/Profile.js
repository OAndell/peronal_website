import React from 'react';
import './Profile.css';
import Paper from 'material-ui/Paper';


export default class Profile extends React.Component {


	displayGithub(){
		if(this.props.data.github === ""){
			return;
		}
		return <p><a href={this.props.data.github}><i className="fa fa-github"></i></a></p>;
	}

	displayLinkedin(){
		if(this.props.data.github === ""){
			return;
		}
		return <p><a href={this.props.data.linkedin}><i className="fa fa-linkedin"></i></a></p>;
	}



	render() {
		const style = {
			textAlign: 'center',
			display: 'inline-block',
		};
	    return(
				<Paper style={style} zDepth={2}>
					<div className="profileBackground">
						<img src={this.props.data.image} className="bigProfileImage"/>
						<h1>{this.props.data.name}</h1>
						<h2>{this.props.data.title}</h2>
						<hr className="profiledivider"/>
						<div className="profileTextHolder">
							<p style={this.props.data.location === "" ? {display:'none'} : {}}>
								<i className="fa fa-location-arrow"></i> {this.props.data.location}</p>
							<p style={this.props.data.email === "" ? {display:'none'} : {}}>
								<i className="fa fa-envelope"></i> {this.props.data.email}</p>
							<p style={this.props.data.resume === "" ? {display:'none'} : {}}>
								<i className='fa fa-address-card'/> <a href={this.props.data.resume}>Resume</a></p>
						</div>
						<hr className="profiledivider"/>
						<table className="iconLinksHolder" cellpadding="10">
							<tbody>
								<tr>
									<th style={this.props.data.github === "" ? {display:'none'} : {}}>
										<p>
											<a href={this.props.data.github}><i className="fa fa-github"></i></a></p>
									</th>
									<th style={this.props.data.linkedin === "" ? {display:'none'} : {}}>
										<p>
											<a href={this.props.data.linkedin}><i className="fa fa-linkedin"></i></a></p>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
				</Paper>
		);
    }
}
