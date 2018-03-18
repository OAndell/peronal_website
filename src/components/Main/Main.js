import React, { Component } from 'react';
import './Main.css';
import Profile from '../../components/Profile/Profile';
import InfoView from '../../components/InfoView/InfoView'
import API from '../../API/API'
import defaultProfileData from '../../defaultdata/defaultProfile.json'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobileView : false,
      profileData: defaultProfileData,
      infoData:[]
    };
  }

  render() {
    return (
      <div className={(this.state.mobileView ? "main_mobile": "main")}>
          <div className="main_grid">
              <div className="main_profile" id="profileID">
  				        <Profile
                    data = {this.state.profileData}/>
              </div>
              <div className="main_desc" id="descID">
  				      <InfoView className="main_desc"
                  data={this.state.infoData}/>
              </div>
         </div>
      </div>
    );
  }

 componentDidMount() {

   API.getPersonData("Oscar Andell").then(response => {
       this.setState({
         profileData: response[0]
       })
       API.getResume(this.state.profileData.id).then(response => {
          this.setState({
            infoData: response
          })
       })
   });

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
