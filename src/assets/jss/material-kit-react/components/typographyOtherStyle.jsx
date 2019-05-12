import {
  defaultFont,
  infoColor,
  // successColor,
  // warningColor,
  dangerColor
} from "assets/jss/material-kit-react.jsx";
import tooltipsStyle from "assets/jss/material-kit-react/tooltipsStyle.jsx";

const typographyOtherStyle = {
  defaultFontStyle: {
    ...defaultFont
  },
  primaryText: {
    color: "#676767"
  },
  ArSent: {
    marginBottom: 10
  },
  // арабские буквы очень маленьки на фоне других
  arFonts: {
    fontSize: 30,
    "@media (max-width: 540px)": {
      fontSize: "27px"
    }
  },
  // ВЫДЕЛИТЬ СЛОВО
  // выделить слово красным
  colorRed: {
    color: dangerColor
  },
  // выделить слово синим
  colorBlue: {
    color: infoColor
  },

  ...tooltipsStyle,

  btnInContrastWord: {
    padding: "0px 10px",
    lineHeight: 1
  },
  btnInContrastWordInArSentence: {
    padding: "0px 0px",
    minWidth: "initial",
    fontSize: 30
  }
};

export default typographyOtherStyle;
