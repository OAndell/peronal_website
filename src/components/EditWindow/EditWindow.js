import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import API from '../../API/API'

export default class EditWindow extends React.Component {

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
      />,
    ];
    return (
      <div>
        <Dialog
          title={"Edit"}
          actions={actions}
          modal={true}
          open={this.props.open}>
        </Dialog>
      </div>
    );
  }
}
