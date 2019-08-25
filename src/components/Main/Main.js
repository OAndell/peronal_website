import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Background from '../../components/Background/Background'
import './Main.css';
import Profile from '../../components/Profile/Profile';
import InfoView from '../../components/InfoView/InfoView';
import API from '../../API/API';
import defaultProfileData from '../../defaultdata/defaultProfile.json'
import defaultResumeData from '../../defaultdata/defaultResume.json'
import defaultTheme from '../../defaultdata/defaultTheme.json'
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
      allPersonsData:[],
    };
    this.fetchAndUpdate = this.fetchAndUpdate.bind(this);
    this.getCurrentPageFromURL = this.getCurrentPageFromURL.bind(this);
    }

 getCurrentPageFromURL(availablePages){
  let url = window.location.href;
  let page=url.split("/")[3]; // http//Andell.eu/PAGE
 
  for (let i = 0; i < availablePages.length; i++) { 
    if ( availablePages[i].name .split(" ")[0].toLocaleLowerCase() === page.toLocaleLowerCase()) {
      return  availablePages[i].name;      
    }    
  }
  return "Oscar Andell"
}

  fetchAndUpdate(name){
    API.getPersonData(name).then(response => {
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

    if(name==="Anton Andell"){
      defaultTheme.main = "#0004eb";
      defaultTheme.textColor = "#0004eb";
      defaultTheme.background = "#fcba03";
      defaultTheme.backgroundLines = "#0004eb"
      defaultTheme.textColor2 = "#000000";
    }
   
  }


  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: defaultTheme.main,
        textColor: defaultTheme.textColor,
        canvasColor:defaultTheme.background,
        shadowColor: defaultTheme.main,
        disabledColor: defaultTheme.textColor2,
      },
    });

    return (
      <MuiThemeProvider  muiTheme={muiTheme}>
        <div>
          <P5Wrapper sketch={Background} colorTheme={defaultTheme}/>
          <ControlPanel
            dataProfile={this.state.profileData}
            dataResume={this.state.infoData}
            dataAllPersons={this.state.allPersonsData}
            updateCallback={this.fetchAndUpdate}/>
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
        </div>
      </MuiThemeProvider>
    );
  }

 componentDidMount() {
   API.getPersons().then(response => {
       this.setState({
         allPersonsData: response
       })
      let pageToLoad = this.getCurrentPageFromURL(response);
      this.fetchAndUpdate(pageToLoad);
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
