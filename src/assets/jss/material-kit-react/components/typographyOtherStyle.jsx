import {
    defaultFont,
    primaryColor,
    infoColor,
    // successColor,
    // warningColor,
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
        marginBottom: 10,
    },
    // арабские буквы очень маленьки на фоне других
    arFonts: {
        fontSize: '32px',
    },
    defaultParagraphMargins: {
        marginBottom: '1rem',
    },
    // ВЫДЕЛИТЬ СЛОВО
    // выделить слово красным
    contrastWord: {
        // color: dangerColor,
    },
    colorRed: {
        color: dangerColor,
    },
    // выделить слово синим
    colorBlue: {
        color: infoColor,
    },

    // блок дополнительно  информации
    additionalInfo: {
        paddingLeft: 15,
        borderLeft: `solid 3px ${primaryColor}`,
    },
}

export default typographyOtherStyle
