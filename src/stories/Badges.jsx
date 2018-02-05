import React from 'react'
import TcellBadge from 'tcellbadge'
import TcellAppBar from 'tcellappbar'
import PropTypes from 'prop-types'
import {withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton';
import MailIcon from 'material-ui-icons/Mail'
import VoicemailIcon from 'material-ui-icons/Voicemail'
import Typography from 'material-ui/Typography'
import MenuIcon from 'material-ui-icons/Menu'
import Button from 'material-ui/Button'
import AccountCircle from 'material-ui-icons/AccountCircle';
import ButtonMenu from './MenuItem';

const style = {
  margin:"30px 0 0 25px",
  firstColor:{
    color:"blue"
  },
  flex: {
    flex: 1,
  },
}

class SimpleBadge extends React.Component{
  constructor(props){
    super();
    const { classes } = props;
  }

  render(){

    return(
      <div>
          
          <TcellBadge  
            badgeContent={10}
            color="primary"
            onClick={()=> console.log('hello')}
          >
            <MailIcon/>
          </TcellBadge>
       
          <TcellBadge color="secondary">
            <VoicemailIcon/> 
          </TcellBadge>

          <TcellBadge badgeContent={10} color="primary">
            <MailIcon/> 
          </TcellBadge  >
 
          <div>
            <TcellAppBar>  
              
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>

              <Typography type="title" color="inherit" style={style.flex}>
                  Title
              </Typography>
              
              <TcellBadge badgeContent={10} color="primary">
                <MailIcon style={style.secondColor}/> 
              </TcellBadge  >
              
              <TcellBadge color="secondary">
                <AccountCircle/> 
              </TcellBadge  >
              
              <TcellBadge 
                badgeContent={10} 
                color="primary" 
              >
                <AccountCircle/> 
              </TcellBadge  >

            </TcellAppBar> 
          </div>
      </div> 
    );
  }
}

export default SimpleBadge;
