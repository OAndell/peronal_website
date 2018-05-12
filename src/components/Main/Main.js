import React, { Component } from 'react';
import './Main.css';
import Profile from '../../components/Profile/Profile';
import InfoView from '../../components/InfoView/InfoView'
import API from '../../API/API'
import defaultProfileData from '../../defaultdata/defaultProfile.json'
import defaultResumeData from '../../defaultdata/defaultResume.json'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ControlPanel from '../../components/ControlPanel/ControlPanel'
import getMuiTheme from 'material-ui/styles/getMuiTheme';





class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobileView : false,
      profileData: defaultProfileData,
      infoData:defaultResumeData,
      loginWindowOpen: false
    };
  }



  //TODO mabye not hardcode colors, or redo app in material design?
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: "#92C26B",
        primary2Color: "#131521",
        textColor: "#92C26B",
        canvasColor:"#131521",
        borderColor: '#a3a1a1',
        disabledColor: "#a3a1a1",
        shadowColor: "#92C26B"
      },
    });

    return (
      <MuiThemeProvider  muiTheme={muiTheme}>
        <ControlPanel
          dataProfile={this.state.profileData}
          dataResume={this.state.infoData}/>
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
      </MuiThemeProvider>
    );
  }

 componentDidMount() {

   API.getPersonData("Oscar Andell").then(response => {
       this.setState({
         profileData: response[0]
       })
       API.getResume(this.state.profileData.id).then(response => {
          response = JSON.parse((JSON.stringify(response).replace(/%%%/g, "'")))
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
