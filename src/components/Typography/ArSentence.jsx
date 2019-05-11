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
  flexWrap: "wrap",
  justifyContent: "flex-end"
};
const styleArSentenceTranslate = {
  fontSize: 16,
  marginLeft: 10,
  lineHeight: 1.3
};

function ArSent({ ...props }) {
  const { classes, children, translate } = props;
  return (
    <React.Fragment>
      <span
        style={styleArSentence}
        className={classes.defaultFontStyle + " " + classes.arFonts + " " + classes.ArSent}
      >
        {children}
      </span>
      <span style={styleArSentenceTranslate}>{translate}</span>
    </React.Fragment>
  );
}

ArSent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyOtherStyle)(ArSent);
