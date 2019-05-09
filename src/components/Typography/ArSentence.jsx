import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyOtherStyle from 'assets/jss/material-kit-react/components/typographyOtherStyle.jsx'
const styleArSentence = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    'justify-content': 'flex-end'
}
const styleArSentenceTranslate = {
    fontSize: 16,
    marginLeft: 10,
    lineHeight: 1.3,
}

function ArSentence({ ...props }) {
    const { classes, children, translate } = props
    return (
        <div
            style={styleArSentence}
            className={classes.defaultFontStyle + ' ' + classes.arFonts + ' ' + classes.arSentence}>
            <span>{children}</span>
            <span style={styleArSentenceTranslate}>{translate}</span>
        </div>
    )
}

ArSentence.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(typographyOtherStyle)(ArSentence)
