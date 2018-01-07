import React, { Component } from 'react';
import './Main.css';
import Profile from '../../components/Profile/Profile';
import InfoView from '../../components/InfoView/InfoView'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {mobileView : false};
  }

  render() {
    return (
      <div className={(this.state.mobileView ? "main_mobile": "main")}>
          <div className="main_grid">
              <div className="main_profile">
  				        <Profile
                    image={"https://andell.eu/profileImages/oscar.jpg"}
                    name="Oscar Andell"
                    title="IT student"
                    email="Oscar@Andell.eu"
                    location="Linköping, Sweden"
                    github="https://github.com/OAndell/"
                    linkdin="https://www.linkedin.com/in/oscar-andell-156ba0138/"/>
              </div>
              <div className="main_desc">
  				      <InfoView className="main_desc"/>
              </div>
         </div>
      </div>
    );
  }

 componentDidMount() {
  const checkMobileSize = () => {
     if (window.innerWidth<= 1075){
       this.setState({mobileView : true});
     }
     else{
       this.setState({mobileView : false});
     }
   }
   checkMobileSize();
   window.addEventListener('resize', checkMobileSize);
 }
}


export default Main;
