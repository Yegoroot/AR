import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyOtherStyle from 'assets/jss/material-kit-react/components/typographyOtherStyle.jsx'

function RuSentence({ ...props }) {
    const { classes, children } = props
    return <div className={classes.defaultFontStyle + ' ' + classes.ruSentence}>{children}</div>
}

RuSentence.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(typographyOtherStyle)(RuSentence)
