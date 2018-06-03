import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionLockOpen from 'material-ui/svg-icons/action/lock-open';
import LoginWindow from '../../components/LoginWindow/LoginWindow';
import EditWindow from '../../components/EditWindow/EditWindow';
import Menu from '../../components/Menu/Menu';

import './ControlPanel.css'



export default class ControlPanel extends React.Component {
  state = {
    isMenuOpen:false,
    loginWindowOpen: false,
    autenticated: false,
    user: {
      username:"",
      password:""
    }
  };

  handleLoginWindowOpen = () => {
    this.setState({loginWindowOpen: true});
  };

  handleLoginWindowClose = () => {
    this.setState({loginWindowOpen: false});
  };

  handleEditWindowClose = () => {
    this.setState({
      autenticated: false,
      user: {
        username:"",
        password:""
      }
    });
  };

  handleAutenticated = (username, password) => {
    this.setState({
      autenticated: true,
      user: {
        username:username,
        password:password
      }
    });
  };


  render() {
    return (
      <div>
        <Menu
          loginCallback={this.handleLoginWindowOpen}
          updateCallback={this.props.updateCallback}
          dataAllPersons={this.props.dataAllPersons}/>
        <LoginWindow
          open={this.state.loginWindowOpen}
          handleClose={this.handleLoginWindowClose}
          autenticate={this.handleAutenticated}/>
        <EditWindow
          open={this.state.autenticated}
          handleClose={this.handleEditWindowClose}
          dataResume={this.props.dataResume}
          dataProfile={this.props.dataProfile}
          user={this.state.user}/>
      </div>

    );
  }
}
