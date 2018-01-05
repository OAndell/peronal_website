import React, { Component } from 'react';
import './Main.css';
import Profile from '../../components/Profile/Profile';
import InfoView from '../../components/InfoView/InfoView'
import { Container, Row, Col } from 'react-grid-system';

class Main extends Component {
  render() {
    return (
      <div className="Main">
          <br/><br/><br/><br/>
          <Container>
  					<Row >
  						<Col xl={4.1}>
  							<Profile image={"https://andell.eu/profileImages/oscar.jpg"} name="Oscar Andell" title="IT student" email="Oscar@Andell.eu" location="Linköping, Sweden" github="https://github.com/OAndell/" linkdin="https://www.linkedin.com/in/oscar-andell-156ba0138/"/>
  						</Col>
  						<Col xl={7.1}>
  							<InfoView/>
  						</Col>
  					</Row>
  				</Container>
      </div>
    );
  }
}

export default Main;
//<Profile image={"http://andell.eu/profileImages/oscar.jpg"} name="Oscar Andell" title="IT student" email="Oscar@Andell.eu" location="Linköping, Sweden" github="https://github.com/OAndell/" linkdin="https://www.linkedin.com/in/oscar-andell-156ba0138/"/>
