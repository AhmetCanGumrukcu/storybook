import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { TcellComponent } from 'tcellcomponent'

const styles = theme => ({
    root: {
        margin: 20,
        background: 'white'
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    flexGrow: {
        flex: '1 1 auto',
    },
    flexContainer: {
        display: 'flex',
        alignItems: 'center'
    }
});

class TcellCard extends TcellComponent {
    constructor(props) {
        super(props);
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }

    handleExpandClick() {
        if (this.props.onExpandClick) {
            this.props.onExpandClick();
        }
    };

    showExpansionIcon = () => {
        if (this.props.expandable) {
            return <IconButton className={classnames(this.props.classes.expand, { [this.props.classes.expandOpen]: this.props.expanded })}
                onClick={this.handleExpandClick}
                aria-expanded={this.props.expanded}
                aria-label="Show more">
                <ExpandMoreIcon />
            </IconButton>
        }
    }

    getContent = () => {        
        if (this.props.expandable) {
            return <Collapse in={this.props.expanded} transitionDuration="auto" >
                <CardContent>
                    {this.props.children}
                </CardContent>
            </Collapse>
        } else {
            return <CardContent>
                        {this.props.children}
                    </CardContent>
        }
    }

    render() {
        const { raised, classes, title, subtitle, name } = this.props;
       
        return (
            <Card raised={raised} classes={{ root: classes.root }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe">R</Avatar>
                    }
                    title={<div className={classes.flexContainer}>
                        <span>{title}</span>
                        <div className={classes.flexGrow} />
                        { this.showExpansionIcon() }
                    </div>
                    }
                    subheader={subtitle}
                />
                { this.getContent() }
            </Card>

        );
    }
}

TcellCard.propTypes = {
    name: PropTypes.string.isRequired,
    raised: PropTypes.bool,
    expanded: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    expandable: PropTypes.bool,
    onExpandClick: PropTypes.func
}

TcellCard.defaultProps = {
    raised: false,
    expanded: false,
    title: 'Title is here...',
    expandable: false,
    subtitle: ''
}

export default withStyles(styles)(TcellCard);


