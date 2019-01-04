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
    arFonts: {
        fontSize: '32px',
    },
    ruFonts: {
        // fontSize: 16,
    },
    defaultParagraphMargins: {
        marginBottom: '30px',
    },
    contrastWord: {
        color: dangerColor,
    },
    // labelWord: {
    //     position: 'absolute',
    //     color: dangerColor,
    //     top: -50,
    //     fontSize: 70,
    // },
}

export default typographyOtherStyle
