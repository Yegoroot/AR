import {
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
} from 'assets/jss/material-kit-react.jsx'

const typographyOtherStyle = {
    defaultFontStyle: {
        ...defaultFont,
    },
    primaryText: {
        // color: primaryColor,
        color: '#676767',
    },
    arSentence: {
        fontSize: '32px',
    },
    ruSentence: {
        // fontSize: 16,
    },
    defaultParagraphMargins: {
        marginBottom: '30px',
    },
    contrastWord: {
        color: dangerColor,
    },
}

export default typographyOtherStyle
