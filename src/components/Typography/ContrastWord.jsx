import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyOtherStyle from 'assets/jss/material-kit-react/components/typographyOtherStyle.jsx'

function ContrastWord({ ...props }) {
    const { classes, children, inRu } = props
    const arFonts = inRu ? ' ' + classes.arFonts : ' ' // в русском предложении арабское слово
    return <span className={classes.defaultFontStyle + ' ' + classes.contrastWord + arFonts}>{children}</span>
}

ContrastWord.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(typographyOtherStyle)(ContrastWord)
