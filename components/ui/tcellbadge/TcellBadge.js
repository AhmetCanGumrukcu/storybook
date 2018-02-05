import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import { TcellComponent } from 'tcellcomponent'

const styles = {
    badge: {
      margin: "0px",
    },
};

class TcellBadge extends TcellComponent{
    constructor(){
        super();       
    }

  
    render(){
        return(
            <IconButton>
                <Badge style={styles.badge}  {...this.props}>
                    
                </Badge>
            </IconButton>
        )
    }
}

TcellBadge.propTypes = {   
    badgeContent:PropTypes.number,
    onClick: PropTypes.func,
}

TcellBadge.defaultProps = {
    color:"primary"
}

export default withStyles(styles)(TcellBadge);


