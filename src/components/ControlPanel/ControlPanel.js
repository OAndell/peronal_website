import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import LoginWindow from '../../components/LoginWindow/LoginWindow'
import EditWindow from '../../components/EditWindow/EditWindow'
import './ControlPanel.css'

export default class ControlPanel extends React.Component {
  state = {
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
        <FloatingActionButton
          className="login_float_button"
          backgroundColor="#92C26B"
          iconStyle={{fill: '#131521'}}
          onClick={this.handleLoginWindowOpen}>
          <EditorModeEdit/>
        </FloatingActionButton>
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
