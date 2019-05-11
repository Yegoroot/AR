import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import typographyOtherStyle from "assets/jss/material-kit-react/components/typographyOtherStyle.jsx";
const styleArSentence = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap"
};
const styleArSentenceTranslate = {
  fontSize: 16,
  marginRight: 20,
  lineHeight: 1.3
};

function ArSent({ ...props }) {
  const { classes, children, translate } = props;
  return (
    <div
      dir="rtl"
      style={styleArSentence}
      className={classes.defaultFontStyle + " " + classes.arFonts + " " + classes.ArSent}
    >
      <span>{children}</span>
      <span dir="auto" style={styleArSentenceTranslate}>
        {translate}
      </span>
    </div>
  );
}

ArSent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyOtherStyle)(ArSent);
