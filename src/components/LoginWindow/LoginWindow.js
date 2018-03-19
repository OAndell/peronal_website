import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import TextField from 'material-ui/TextField';
import './LoginWindow.css'

export default class LoginWindow extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <FloatingActionButton
          className="login_float_button"
          backgroundColor="#92C26B"
          iconStyle={{fill: '#131521'}}
          onClick={this.handleOpen}>
          <EditorModeEdit/>
        </FloatingActionButton>
        <Dialog
          title={"Login"}
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <TextField
          hintText="Username"/><br />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        />
        </Dialog>
      </div>
    );
  }
}
