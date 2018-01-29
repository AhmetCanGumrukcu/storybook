import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import { TcellComponent } from 'tcellcomponent'
import MailIcon from 'material-ui-icons/Mail';
import VoicemailIcon from 'material-ui-icons/Voicemail'

const styles = {
    badge: {
      margin: "0px",
    },
  };

class TcellBadges extends TcellComponent{

    constructor(){
        super();
        this.state = false
    }

    render(){
        return(
            <Badge style={styles.badge}  {...this.props}>
                <MailIcon />
            </Badge>
        )
    }
}

TcellBadges.propTypes = {   
    badgeContent:PropTypes.string,     
    color:PropTypes.strig,
}

TcellBadges.defaultProps = {
    badgeContent:4,
    color:"primary"
}

export default withStyles(styles)(TcellBadges);


