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
      loading: true,
      profileData: defaultProfileData,
      infoData:defaultResumeData,
      allPersonsData:[],
      colorTheme: defaultTheme,
    };
    this.fetchAndUpdate = this.fetchAndUpdate.bind(this);
    this.getCurrentPageFromURL = this.getCurrentPageFromURL.bind(this);
    this.updateStateCallback = this.updateStateCallback.bind(this);
  }

  updateStateCallback(profileData,infoData,colorTheme) {
      this.setState({
        profileData: profileData,
        infoData:infoData,
        colorTheme: colorTheme,
      })
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
    this.setState({loading:true})
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
        API.getTheme(this.state.profileData.id).then(response => {
          if(response.length !== 0){
            let theme = response[0]
            this.setState({
              colorTheme:{
                main:'#'+theme.main,
                textColor:'#'+theme.textcolor,
                background:  '#'+theme.background,
                backgroundLines: '#'+theme.background_lines,
                textColor2: '#'+theme.textcolor2,
                paperColor: '#'+theme.papercolor
              }
            });
          }
          else{
            this.setState({
              colorTheme: defaultTheme
            });
          }
          this.setState({loading:false})
        })
        window.history.pushState(null, '', name.split(" ")[0]); //update url

    });

  }


  render() {
    document.body.style.backgroundColor = this.state.colorTheme.background;
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: this.state.colorTheme.main,
        textColor: this.state.colorTheme.textColor,
        canvasColor:this.state.colorTheme.paperColor,
        shadowColor: this.state.colorTheme.main,
        disabledColor: this.state.colorTheme.textColor2,
      },
    });


    return (
      <MuiThemeProvider  muiTheme={muiTheme}>
        <div>
          <ControlPanel
            dataProfile={this.state.profileData}
            dataResume={this.state.infoData}
            dataAllPersons={this.state.allPersonsData}
            updateCallback={this.fetchAndUpdate}
            colorTheme={this.state.colorTheme}
            updateStateCallback={this.updateStateCallback}/>
          <P5Wrapper sketch={Background} colorTheme={this.state.colorTheme}/>
          <div style={ this.state.loading ? {display:'none'}:{display:'inline'}} 
          className={(this.state.mobileView ? "main_mobile": "main")}>
              <div className="main_grid">
                  <div className="main_profile" id="profileID">
                      <Profile
                        data = {this.state.profileData}/>
                  </div>
                  <div className="main_desc" id="descID">
                    <InfoView className="main_desc"
                      data={this.state.infoData}
                      colorTheme={this.state.colorTheme}/>
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
