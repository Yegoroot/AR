import {
    defaultFont,
    primaryColor,
    infoColor,
    // successColor,
    // warningColor,
    dangerColor,
} from 'assets/jss/material-kit-react.jsx'
import tooltipsStyle from 'assets/jss/material-kit-react/tooltipsStyle.jsx'

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
        fontSize: 30,
        '@media (max-width: 540px)': {
            fontSize: '27px',
        },
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
    ...tooltipsStyle,

    btnInContrastWord: {
        padding: '0px 10px',
        lineHeight: 1,
    },
    btnInContrastWordInArSentence: {
        padding: '0px 0px',
        minWidth: 'initial',
        fontSize: 30,
    },
}

export default typographyOtherStyle
