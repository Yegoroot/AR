import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyOtherStyle from 'assets/jss/material-kit-react/components/typographyOtherStyle.jsx'
import classNames from 'classnames'

function ContrastWord({ ...props }) {
    const { classes, children, inRu, blue, red } = props
    const classContrastWord = classNames({
        [classes.defaultFontStyle]: true,
        [classes.contrastWord]: true,
        [classes.arFonts]: inRu, // в русском предложении арабское слово
        [classes.colorBlue]: blue,
        [classes.colorRed]: red,
    })

    return <span className={classContrastWord}>{children}</span>
}

ContrastWord.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(typographyOtherStyle)(ContrastWord)
