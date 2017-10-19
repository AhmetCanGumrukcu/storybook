import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function TcellAppBar(props) {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
            { children }         
        </Toolbar>
      </AppBar>
    </div>
  );
}

TcellAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TcellAppBar);