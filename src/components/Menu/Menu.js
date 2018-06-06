import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionLockOpen from 'material-ui/svg-icons/action/lock-open';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import './Menu.css'

//TODO make nice animation
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
            {this.state.isMenuOpen ? <CloseIcon/> : <CloseIcon/>}
          </FloatingActionButton>
          {this.props.dataAllPersons.map(person => {
            return(
              <Tooltip title={person.name} placement="right">
                <FloatingActionButton
                  className="menu_button menu_button_animation"
                  backgroundColor="#92C26B"
                  onClick={(e) => {
                    this.props.updateCallback(person.name);
                  }}>
                    <img src={person.image}  />
                </FloatingActionButton>
              </Tooltip>
            )
          })}
          <Tooltip title="Login" placement="right">
            <FloatingActionButton
              className="menu_button menu_button_animation"
              backgroundColor="#92C26B"
              iconStyle={{fill: '#131521'}}
              onClick={this.props.loginCallback}>
              <ActionLockOpen/>
            </FloatingActionButton>
          </Tooltip>
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
