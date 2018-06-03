import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionLockOpen from 'material-ui/svg-icons/action/lock-open';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';


import './Menu.css'


export default class Menu extends React.Component {

  state = {
    isMenuOpen: false
  };

  handleMenuClick = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  };

  render() {
    if(this.state.isMenuOpen){
      return(
        <div className="menu">
          <FloatingActionButton
            className="menu_button"
            backgroundColor="#92C26B"
            iconStyle={{fill: '#131521'}}
            onClick={this.handleMenuClick}>
            <CloseIcon/>
          </FloatingActionButton>
          {this.props.dataAllPersons.map(person => {
            return(
              <FloatingActionButton
                className="menu_button"
                backgroundColor="#92C26B"
                onClick={(e) => {
                  this.props.updateCallback(person.name);
                  this.handleMenuClick();
                }}>
                <img src={person.image}/>
              </FloatingActionButton>
            )
          })}
          <FloatingActionButton
            className="menu_button"
            backgroundColor="#92C26B"
            iconStyle={{fill: '#131521'}}
            onClick={this.props.loginCallback}>
            <ActionLockOpen/>
          </FloatingActionButton>
        </div>
      );
    }
    else {
      return(
        <div className="menu">
          <FloatingActionButton
            className="menu_button"
            backgroundColor="#92C26B"
            iconStyle={{fill: '#131521'}}
            onClick={this.handleMenuClick}>
            <MenuIcon/>
          </FloatingActionButton>
        </div>
  		);
    }
  }
}
