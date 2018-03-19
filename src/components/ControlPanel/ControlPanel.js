import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import TextField from 'material-ui/TextField';
import LoginWindow from '../../components/LoginWindow/LoginWindow'
import EditWindow from '../../components/EditWindow/EditWindow'
import './ControlPanel.css'

export default class ControlPanel extends React.Component {
  state = {
    loginWindowOpen: false,
    autenticated: false
  };

  handleLoginWindowOpen = () => {
    this.setState({loginWindowOpen: true});
  };

  handleLoginWindowClose = () => {
    this.setState({loginWindowOpen: false});
  };

  handleEditWindowClose = () => {
    this.setState({autenticated: false});
  };

  handleAutenticated = () => {
    this.setState({autenticated: true});
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
          handleClose={this.handleEditWindowClose}/>
      </div>
    );
  }
}
