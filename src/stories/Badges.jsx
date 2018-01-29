import React from 'react'
import TcellBadges from 'tcellbadges'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import MailIcon from 'material-ui-icons/Mail'

const style = {
  margin:"30px 0 0 25px"
}

function SimpleBadge(props) {
  const { classes } = props;
  return (
    <div>
        <TcellBadges style={style} badgeContent={4} color="primary"/>
        <TcellBadges style={style} badgeContent={4} color="primary"/>
        <MailIcon/>
    </div>
  );
}

export default SimpleBadge;