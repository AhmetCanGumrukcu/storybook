import React from 'react'
import { withStyles } from 'material-ui/styles'
import TcellAppBar from 'tcellappbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import MenuIcon from 'material-ui-icons/Menu'
import Button from 'material-ui/Button'

const styles = {   
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
}

function AppBarViewer(props) {
    const classes = props.classes;
    return (
        <TcellAppBar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
                Title
          </Typography>
            <Button color="contrast">Login</Button>
        </TcellAppBar>
    );
}

export default withStyles(styles)(AppBarViewer);