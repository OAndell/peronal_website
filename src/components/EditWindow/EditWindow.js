import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import API from '../../API/API'
import TextField from 'material-ui/TextField';


export default class EditWindow extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmitProfileInfo = this.handleSubmitProfileInfo.bind(this);
  }

  getIndexes(array){
    var indexes = [];
    for (var i = 0; i < array.length; i++) {
       indexes.push(i);
    }
    return indexes;
  }

  handleSubmitProfileInfo(){
    API.updateProfileInfo(
      this.props.user.username,
      this.props.user.password,
      this.props.dataProfile
    );
  }

  handleSubmitResumeSection(){
    API.updateResumeInfo(
      this.props.user.username,
      this.props.user.password,
      this.props.dataResume
    );
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />
    ];
    return (
        <Dialog
          title={"Edit"}
          actions={actions}
          modal={true}
          autoScrollBodyContent={true}
          open={this.props.open}>
          <h3>Basic Info</h3>
          <TextField
          hintText="Name"
          floatingLabelText="Name"
          defaultValue={this.props.dataProfile.name}
          onChange={(e) => {this.props.dataProfile.name = e.target.value}}
          /><br/>
          <TextField
          hintText="Title"
          floatingLabelText="Title"
          defaultValue={this.props.dataProfile.title}
          onChange={(e) => {this.props.dataProfile.title = e.target.value}}
          /><br/>
          <TextField
          hintText="Location"
          floatingLabelText="Location"
          defaultValue={this.props.dataProfile.location}
          onChange={(e) => {this.props.dataProfile.location = e.target.value}}
          /><br/>
          <TextField
          hintText="Email"
          floatingLabelText="Email"
          defaultValue={this.props.dataProfile.email}
          onChange={(e) => {this.props.dataProfile.email = e.target.value}}
          /><br/>
          <TextField
          hintText="ResumeURL"
          floatingLabelText="ResumeURL"
          defaultValue={this.props.dataProfile.resume}
          onChange={(e) => {this.props.dataProfile.resume = e.target.value}}
          /><br/>
          <TextField
          hintText="GithubURL"
          floatingLabelText="GithubURL"
          defaultValue={this.props.dataProfile.github}
          onChange={(e) => {this.props.dataProfile.github = e.target.value}}
          /><br/>
          <TextField
          hintText="LinkedInURL"
          floatingLabelText="LinkedInURL"
          defaultValue={this.props.dataProfile.linkedin}
          onChange={(e) => {this.props.dataProfile.linkedin = e.target.value}}
          /><br/>
          <RaisedButton label="Update Basic Info"
          primary={true}
          onClick={this.handleSubmitProfileInfo}/>
          <h3>InfoWindow</h3>
          {this.getIndexes(this.props.dataResume).map(index => {
            return (
              <div>
                <TextField
                   hintText="#"
                   type="number"
                   floatingLabelText="#"
                   style = {{width: 30}}
                   defaultValue={this.props.dataResume[index].displayorder}
                   onChange={(e) => {this.props.dataResume[index].displayorder = e.target.value}}/>
                   &nbsp;
                <TextField
                   hintText="Title"
                   floatingLabelText="Title"
                   fullWidth={true}
                   defaultValue={this.props.dataResume[index].title}
                   onChange={(e) => {this.props.dataResume[index].title = e.target.value}}/>
                   <br/>
                <TextField
                   hintText="Body"
                   floatingLabelText="Body"
                   multiLine={true}
                   rows={3}
                   rowsMax={3}
                   fullWidth={true}
                   defaultValue={this.props.dataResume[index].body}
                   onChange={(e) => {this.props.dataResume[index].body = e.target.value}}/>
                   <br/>
               </div>
            );
          })}
        </Dialog>

    );
  }
}
